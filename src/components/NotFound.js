import React from 'react'
import {Link} from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="page-not-found-container">
        <h1>001 Error</h1>
        <h1>NotFound</h1>
        <Link to="/home">Go Back to the home page</Link>
    </div>
  )
}

export default NotFound;
