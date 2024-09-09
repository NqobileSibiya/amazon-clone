import React, {useContext} from 'react';
import "./Product.css";
import ShoppingContext from "../context/shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {

const shoppingContext = useContext (ShoppingContext)
const  {addToBasket} = shoppingContext;

const addToBasketHandler = () => {
  addToBasket ({items: {id, image, title, rating, price} });
};

  return (
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
      <button className="product_button" onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;






