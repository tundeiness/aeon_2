/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import {
  useState, useContext, createContext, useNavigate, useMemo,
} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [isAuthenticated, seIsAuthenticated] = useState(false);

  const login = (user) => {
    setUser(user);
    navigate('/dashboard');
  };

  // const login = async (user) => {
  //   setUser(user);
  //   navigate('/dashboard');
  // };

  // const logout = () => {
  //   setUser(null);
  //   navigate('/', { replace: true });
  // };

  // const logout = (user) => {
  //   setUser(null);
  // };

  // const value = useMemo(
  //   () => ({
  //     user,
  //     login,
  //     logout,
  //     isAuthenticated,
  //   }),
  //   [user],
  // );

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
