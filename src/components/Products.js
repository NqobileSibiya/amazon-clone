import React from 'react';
import './Products.css';
import {Link} from "react-router-dom";

const Products = () => {
  return (
    <div>
     <h1>
      <ul>
        <li>
          <Link to="/Products/1">Product 1</Link>
          </li>
        <li>
        <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
     </h1>
    </div>
  )
}

export default Products;