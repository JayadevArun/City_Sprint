// UserContext.js
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = React.useState('');

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

UserContext.jsx



