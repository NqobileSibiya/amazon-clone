import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import ShoppingContext from "./context/shopping/shoppingContext";
import { auth } from "./components/firebase";
import CheckoutProduct from "./components/CheckoutProducts";
import Checkout from "./components/Checkout";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import Payment from "./components/Payment";



const stripePromise = loadStripe("pk_live_51PemKwLbXXNN8PEtVDdNc7te8OP6EVa1u7INYNS1zezuWPmSuPGT97QIlXHwu2CPYTbDXhuRxUtNiBlnicFhiiNa00OOYrSe2C" );

const PaymentWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

const App = () => {

  const shoppingContext = useContext (ShoppingContext);
  const  { setUser } = shoppingContext;


  useEffect(() => {
    // Set up an observer on the Auth object to detect the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("User is =>", authUser);
  
      if (authUser) {
        // If a user is authenticated, update the state with the user object
        setUser(authUser);
      } else {
        // If no user is authenticated, set the user state to null
        setUser(null);
      }
    });
  
    // Cleanup function to unsubscribe from the auth state listener
    return () => unsubscribe();
  }, [setUser]);
  

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

            <Route path="/payment" element={<PaymentWrapper />} />

            
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
    </>
  );
}

export default App;
