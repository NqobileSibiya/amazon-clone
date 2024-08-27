import React from 'react'
import"./Header.css";
import FmdGoodIcon from '@mui/icons-material/FmdGood';


const Header = () => {
  return (
    <header className="Header">
      <img className ="logo" 
        src="/assets/Amazon.jpg"/>

      <div className="Header_option">
        <div className="delivery option">
          <div className="Location_icon">
            <FmdGoodIcon className="location_icon" />
          </div>
        </div>
      </div>

      <div className="Header_option">
      </div>

      <div className="Header_option">

      </div>
    </header>
  )
}

export default Header;