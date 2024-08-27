import React from "react";
import {
  BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Navigate to ="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/id" element={<ProductDetails />} />

{/* not existing route */}
            <Route path="/notfound" element={<NotFound />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
