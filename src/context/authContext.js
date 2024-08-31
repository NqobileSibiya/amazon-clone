import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
  });

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const userInfo = localStorage.getItem("isLoggedIn");
      if (userInfo === "1") {
        setIsLoggedIn(true);
      }
    }, []);
  
    const loginHandler = (email, password) => {
        console.log("testing login");
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };
  

  export default AuthContext;