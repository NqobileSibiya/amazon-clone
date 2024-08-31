import React, { useContext } from 'react';
import ShoppingContext from "../context/shopping/shoppingContext";

const CheckoutProducts = ({ id, image, title, rating, price, hideButton }) => {

    const shoppingContext = useContext(ShoppingContext)
    const {removeFromBasket} = shoppingContext;

    const removeFromBasketHandler = () => {
        removeFromBasket ({id: id})
    }
  return (
    <div> 
        <div className="product" key={id}>
          <img src={image} alt={title} />
          <div className="product-info">
            <p>{title}</p>
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <span key={i} role="img" aria-label="star">⭐</span>
                ))}
            </div>
            <p className="product_price">${price}</p>
          </div>
          {!hideButton && (
            <button className="product_button" onClick={removeFromBasketHandler}
            >
            Remove from Basket
            </button>
          )}
        </div>
    </div>
  )
}

export default CheckoutProducts;