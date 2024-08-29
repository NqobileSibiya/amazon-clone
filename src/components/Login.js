import React, { useState, useEffect,useReducer } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const reducer = (state, action) => {

  if(action.type === "EMAIL_INPUT"){
    return{...state, emailValue: action.payload}
  }

  if(action.type === "PASS_INPUT"){
    return{...state, passwordValue: action.payload}
  }

  return {emailValue:"",passwordValue: ""}
}

const Login = ({onLogin}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [state, dispatch] = useReducer(reducer,{
    emailValue:"",
    passwordValue:"",
  })

  useEffect(() => {
     const identifier = setTimeout(() =>{
      console.log("Checking for form validity")
      setIsFormValid(state.emailValue.includes("@") && state.passwordValue.trim().length > 7);
     }, 1000)

    return() =>{
      console.log("cleanup is triggered")
      clearTimeout(identifier)
    }
     
  }, [state.emailValue, state.passwordValue]);

  const emailChangeHandler = (e) => {
    dispatch({type:"EMAIL_INPUT",payload:e.target.value})
    // setEmail(e.target.value);
    // setIsFormValid(e.target.value.includes("@") && password.trim().length > 7);
  };

  const passwordChangeHandler = (e) => {
    dispatch({type:"PASS_INPUT",payload:e.target.value})
    // setPassword(e.target.value);
    // setIsFormValid(email.includes("@") && e.target.value.trim().length > 7);
  };

  const LogIn = (e) => {
    e.preventDefault();
    console.log(isFormValid);
    console.log("Email:", state.passwordValue);
    console.log("Password:", state.passwordValue);
    onLogin(state.emailValue, state.passwordValue)
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
          <input type="text" placeholder="Email" value={state.emailValue} onChange={emailChangeHandler}/>
          <label>Password</label>
          <input type="password" placeholder="Password" value={state.passwordvalue} onChange={passwordChangeHandler}/>
          <button type="submit" className="login-button" onClick={LogIn}>
            Sign In</button>
        </form>
        <p>By Continuing, you agree to Amazon's conditions of Use and Privacy Notice.</p>
        <button className="signup-button">Create your Amazon Account</button>
      </div>
    </div>
  );
}
export default Login;
