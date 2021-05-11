import React, { useState, createContext } from 'react';

export const PhotoContext = createContext();

export const PhotoContextProvider = ({ children }) => {
  const [photoUri, setPhotoUri] = useState(null);

  const checkPhoto = (isPhoto) => {
    setPhotoUri(isPhoto);
  };

  return (
    <PhotoContext.Provider value={{ photoUri, checkPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};
