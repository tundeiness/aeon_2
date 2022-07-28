/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {
  createContext, useContext, useState, Navigate,
} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectInstitutionById,
} from '../redux/features/institutionSlice';

const initialState = {
  // serverStatus: false,
  modal: false,
  edit: false,
  id: null,
};

const StateContext = createContext(null);
// const AuthContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeModal, setActiveModal] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [singleInstitution, setSingleInstitution] = useState(null);

  const [userInfo, setUserInfo] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [getItemId, setGetItemId] = useState(null);
  const [getInstitutionId, setGetInstitutionId] = useState(null);
  const [getProductByCode, setGetProductByCode] = useState(null);

  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  const [isAuthenticated, seIsAuthenticated] = useState(false);

  // const iData = useSelector((state) => selectInstitutionById(state, id));
  //  return iData;

  const handleViewInstitution = (id) => {
    setSingleInstitution(useSelector((state) => selectInstitutionById(state, id)));
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const handleSetModal = (toggle) => {
    setIsClicked({ ...initialState, [toggle]: true });
  };

  const login = () => {
    fetch('/login').then((res) => {
      setIsAuth(true);
      setUserInfo(res.user);
    });

    // Navigate('/dashboard');
  };

  const logout = () => {
    fetch('/logout').then((res) => {
      setIsAuth(false);
      setUserInfo(null);
    });

    // Navigate('/dashboard');
  };

  const value = {
    userInfo,
  };

  // const logout = () => {
  //   setUser(null);
  //   Navigate('/', { replace: true });
  // };

  // const logIn = () => {
  //   setIsLoggedIn(true);
  // };
  // const logOut = () => {
  //   setIsLoggedIn(false);
  // };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        activeModal,
        setActiveModal,
        isClicked,
        setIsClicked,
        handleClick,
        handleSetModal,
        isLoggedIn,
        setIsLoggedIn,
        isAuthenticated,
        isOnline,
        setIsOnline,
        userInfo,
        setUserInfo,
        isAuth,
        setIsAuth,
        login,
        logout,
        handleViewInstitution,
        singleInstitution,
        getItemId,
        setGetItemId,
        getInstitutionId,
        setGetInstitutionId,
        getProductByCode,
        setGetProductByCode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
