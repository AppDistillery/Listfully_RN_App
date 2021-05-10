import React, { useState, createContext } from 'react';
import { USERS } from '../MockUsers';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    {
      USERS.map((usr) => {
        if (usr.email === email.toLowerCase() && usr.password === password) {
          setUser(usr);
          setError(null);
        } else {
          setError("Can't find user with that username/password");
        }
      });
    }
  };

  const onLogout = () => {
    setUser(null);
    setError(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, onLogin, onLogout, error }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
