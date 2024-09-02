import React, {useContext} from 'react'
import "./Payment.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import { Link } from "react-router-dom";
import CheckoutProducts from "./CheckoutProducts";
import { useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "./axios";


const Payment = () => {

    const shoppingContext = useContext (ShoppingContext);
    const {basket, user, getBasketTotal} = shoppingContext;

    const stripe = useStripe ();
    const elements = useElements ();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] =useState(null);
    const [disabled, setDisable] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect (() =>{
        const getClientSecret = async () => {
            const response = await axios ({
                method: "POST",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

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