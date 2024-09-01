import React, {useContext} from 'react'
import "./Payment.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import { Link } from "react-router-dom";
import CheckoutProducts from "./CheckoutProducts";

const Payment = () => {

    const shoppingContext = useContext (ShoppingContext);
    const {basket, user} = shoppingContext;

  return (
    <div className= "payment">
        <div className="payment_container">
            <h1>Checkout <Link to= "/checkout">{basket?.length} items</Link></h1>
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
                <div className="payment_details"> stripe intergretion goes here </div>
            </div>
        </div>
    </div>
  )
}

export default Payment;