import "./Checkout.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import React, { useContext } from "react";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./SubTotal";

const Checkout = () => {
    const shoppingContext = useContext(ShoppingContext);
    const { basket, user } = shoppingContext;

    return (
        <div className="checkout">
            <div className="checkout-content">
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">Show Your Shopping Basket</h2>
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
            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
