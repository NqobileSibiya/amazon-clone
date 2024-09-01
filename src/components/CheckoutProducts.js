import React, { useContext } from 'react';
import ShoppingContext from "../context/shopping/shoppingContext";
import "./CheckoutProducts.css";

const CheckoutProducts = ({ id, image, title, rating, price, hideButton }) => {
    const shoppingContext = useContext(ShoppingContext);
    const { removeFromBasket } = shoppingContext;

    const removeFromBasketHandler = () => {
        removeFromBasket({ id });
    };

    return (
        <div className="checkout_product">
            <img className="checkout_product_image" src={image} alt={title} />
            <div className="checkout_product-info">
                <p className="checkout_product_title">{title}</p>

                <div className="checkout_product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i} role="img" aria-label="star">⭐</span>
                        ))}
                </div>
                <p className="checkout_product_price">${price.toFixed(2)}</p>
                {!hideButton && (
                    <button
                        className="product_button"
                        onClick={removeFromBasketHandler}
                    >
                        Remove from Basket
                    </button>
                )}
            </div>
        </div>
    );
};

export default CheckoutProducts;
