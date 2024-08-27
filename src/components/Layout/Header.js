import React from 'react';
import "./Header.css";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <Link to="/">
      <img
        className="logo"
        src="/assets/Amazon.jpg"
        alt="Amazon Logo" // Added alt attribute for accessibility
      />
      </Link>

      <div className="header_option">
        <div className="delivery option">
          <div className="Location_icon">
            <FmdGoodIcon className="location_icon" />
          </div>
          <div className="Location_test">
            <span>Deliver to</span>
            <span>Thailand</span>
          </div>
        </div>
      </div>

      <div className="header_search">
        <button className= "header_search_all">ALL</button>
        <input
          className="header_input"
          type="text" // Corrected type attribute
          placeholder="Search Amazon"
        />
        <SearchIcon
          style={{ fontSize: "30px" }} // Corrected inline style
          className="search_icon"
        />
      </div>

      <div className="header_option">
        <span className=""> hello Guest </span>
        <span className="" >Sign-In </span>
      </div>

      <div className="header_option">
        <span className="header-optionOne"> Returns</span>
        <span className="header-optionTwo ">& Orders</span>
        {/* Additional content can be added here */}
      </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          <span className="header-basketcount">0</span>
        </div>
    </header>
  );
};

export default Header;