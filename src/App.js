import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { useContext, useEffect,} from "react";
import ShoppingContext from "./context/shopping/shoppingContext";
import { auth } from "./components/firebase";
import CheckoutProduct from "./components/CheckoutProducts";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const App = () => {

  const shoppingContext = useContext (ShoppingContext);
  const  {setUser, setUserProperties} = shoppingContext;


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is =>", authUser)

      if(authUser){
        setUserProperties(authUser)
      }else{
        setUser(null)
      }
  })
  }, [setUser, setUserProperties])

  return (
    <>
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />

            <Route path="/checkout-product" element={<CheckoutProduct />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
    </>
  );
}

export default App;
