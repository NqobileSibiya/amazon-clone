import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import {auth} from "../components/firebase";
import ShoppingContext from "../context/shopping/shoppingContext";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;

  const navigate = useNavigate();


  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);


  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      if(auth){
         navigate('/');
      }
    })
      .catch((error) => {
        alert(error.message);
      });
  };

   const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            if(auth){
               navigate('/');
            }
          })
          .catch((error) => {
            // Show error message if login fails
            alert(error.message);
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="./assets/amzonlogo.jpeg" alt="amazon logo" className="login-logo" 
        />
      </Link>

      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <label>Email</label>
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit" className="login-button" onClick={signIn}>
            Sign in</button>
        </form>
        <p>By Continuing, you agree to Amazon's conditions of Use and Privacy Notice.</p>
        <button className="signup-button" onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
