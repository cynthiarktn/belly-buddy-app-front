import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

// Initial state
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('accessToken') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!authToken);
  const [ userId, setUserId ] = useState(null);

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthToken(null);
    setIsLoggedIn(false);
    setUserId(null);
  }

  return (
    <AuthContext.Provider value={{authToken, setAuthToken, isLoggedIn, setIsLoggedIn, userId, setUserId, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
