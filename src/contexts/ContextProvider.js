/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

const ContextProvider = ({ children }) => {
  const test = 0;
  const initialState = {
    serverStatus: false,
  };
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const StateContext = createContext();

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider value={{
      activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
    }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;
