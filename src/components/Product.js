import React from 'react';
import "./Products.css"

const Product = ({ id, image, title, rating, price }) => {
  return (
    <div className="product" key={id}>
      <img src={image} alt={title} />
      <div className="product-info">
        <p>{title}</p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <p className="product_price">${price}</p>
      </div>
      <button className="product_button">Add to Basket</button>
    </div>
  );
}

export default Product;






