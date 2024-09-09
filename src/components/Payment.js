import React, {useContext, useState, useEffect} from 'react'
import "./Payment.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProducts from "./CheckoutProducts";
import {  CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "axios";
import CurrencyFormat from 'react-currency-format';
import { db } from './firebase';

const Payment = () => {

    const shoppingContext = useContext (ShoppingContext);
    const {basket, user, getBasketTotal, emptyBasket} = shoppingContext;

    const stripe = useStripe ();
    const elements = useElements ();
    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] =useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect ((getBasketTotal) =>{
        const getClientSecret = async () => {
            const response = await axios ({
                method: "POST",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket]);

    console.log("Client Secret Key =>", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmPayment(clientSecret, {
            payment_method: {card : elements.getElement(CardElement) },
        })
        .then(({ paymentIntent }) => {
            // Reference to the user's document
            const userDocRef = db.collection("users").doc(user?.uid);
            // Reference to the specific order
            const orderDocRef = userDocRef.collection("orders").doc(paymentIntent.id);

            // Set the order data using the 'set' method on the document reference
            orderDocRef.set({
                basket: basket, 
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            });
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate("/orders");
        })
    }

    const handleOnChange = (e) => {
        setDisabled(e.empty);
        setError(e.error? "e.error.message": "")
    }

  return (
    <div className= "payment">
        <div className="payment_container">
            <h1>
                Checkout <Link to= "/checkout">{basket?.length} items</Link>
            </h1>
        </div>
        <div className="payment_section">
            <div className="payment_title">
                <h3>Delivery Address</h3>
            </div>
            <div className="payment_address">
                <p>{user?.email}</p>
                <p>1 wallace street </p>
                <p>GoodWood</p>
                <p>Cape Town</p>
            </div>
        </div>

        <div className="payment_section">
            <div className="payment_title">
                <h3>review items & delievery</h3>
            </div>
            <div className="payment_item">
            {basket.map((item) => (
                    <CheckoutProducts
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

            </div>
        </div>
        <div className="payment_section">
            <div className="payment_title">
                <div className="payment_details"> 

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleOnChange} />
                        <div className= "payment_priceContainer">
                            <CurrencyFormat 
                            renderText={(value) =>
                                <h3>Order Total: {value}</h3> 
                            }
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : "Buy Now"}</span></button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;