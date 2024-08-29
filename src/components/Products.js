import React from 'react';
import Product from "./Product"; // Import the Product component
import './Products.css';

const Products = () => {
  return (
    <div className="products_container">
      <div className="products_row">
        <Product
          id="1"
          image="https://m.media-amazon.com/images/I/31Cx1cqSLgL._AC._SR360,460.jpg"
          title="Smte-1 Piece Hard Outer Shell Luggage 32"
          rating={4}
          price="R219.00"
        />
        <Product
          id="2"
          image="https://m.media-amazon.com/images/I/31Cx1cqSLgL._AC._SR360,460.jpg"
          title="Smte-1 Piece Hard Outer Shell Luggage 32"
          rating={4}
          price="R219.00"
        />
        <Product
          id="3"
          image="https://m.media-amazon.com/images/I/31Cx1cqSLgL._AC._SR360,460.jpg"
          title="Smte-1 Piece Hard Outer Shell Luggage 32"
          rating={4}
          price="R219.00"
        />
        <Product
          id="4"
          image="https://m.media-amazon.com/images/I/31Cx1cqSLgL._AC._SR360,460.jpg"
          title="Smte-1 Piece Hard Outer Shell Luggage 32"
          rating={4}
          price="R219.00"
        />
        <Product
          id="5"
          image="https://m.media-amazon.com/images/I/31Cx1cqSLgL._AC._SR360,460.jpg"
          title="Smte-1 Piece Hard Outer Shell Luggage 32"
          rating={4}
          price="R219.00"
        />
        <Product
          id="6"
          image="https://m.media-amazon.com/images/I/31Cx1cqSLgL._AC._SR360,460.jpg"
          title="Smte-1 Piece Hard Outer Shell Luggage 32"
          rating={4}
          price="R219.00"
        />
      </div>
    </div>
  );
}

export default Products;