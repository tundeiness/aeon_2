/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

const initialState = {
  serverStatus: false,
  modal: false,
};

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeModal, setActiveModal] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleSetModal = (toggle) => {
    setIsClicked({ ...initialState, [toggle]: true });
  };

  return (
    <StateContext.Provider value={{
      activeMenu, setActiveMenu, activeModal, setActiveModal, isClicked, setIsClicked, handleClick, handleSetModal,
    }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
