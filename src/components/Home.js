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
          src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="hero"
          />
            <Products />
        </div>
      </div>
    </div>
  )
}

export default Home;

