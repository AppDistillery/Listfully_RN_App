import React, { useState, createContext } from 'react';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(true);
  const [error, setError] = useState(null);

  const onLoginAndLogout = () => {
    setUser(!user);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated: !!user, user, onLoginAndLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
