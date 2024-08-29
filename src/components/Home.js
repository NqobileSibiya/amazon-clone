import React from 'react';
import Products from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img 
          className="home_image" 
          src="https://m.media-amazon.com/images/I/61VaF6EP7vL._SX1500_.jpg" alt="Sports Gear" />
        </div>
        <Products />
      </div>
    </div>
  )
}

export default Home;

