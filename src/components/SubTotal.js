import React, { useContext } from 'react';
import './SubTotal.css';
import ShoppingContext from "../context/shopping/shoppingContext";
import { useNavigate } from 'react-router-dom';

const SubTotal = () => {
    const navigate = useNavigate();
    const shoppingContext = useContext(ShoppingContext)
    const {basket, getBasketTotal} = shoppingContext;

    const handleCheckout = () => {
      navigate('/payment');
    }

  return (
    <div className ="SubTotal">
        <p className="subtotal-text">
        Subtotal((basket.length)items:{" "} 
        <strong>${getBasketTotal(basket)}</strong>)
        </p>
        <small className= "subtotal_gift">
            <input type= "checkbox" />
            This order contains a gift
        </small>
        <button onClick={handleCheckout}>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal