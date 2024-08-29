import React, { useEffect, useState } from "react";
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
import AuthContext from "./context/authContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const userInfo = localStorage.getItem("isLoggedIn");

    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    console.log("testing login")
    localStorage.setItem("isLoggedIn", '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
    <div className="App">
      <Router>
        <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler}/>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login onLogin={loginHandler} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Product />} />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
