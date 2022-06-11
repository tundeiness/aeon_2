/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
// import { useStateContext } from '../../contexts/ContextProvider';

const Protected = ({ children, isLoggedIn }) => {
  // const { isLoggedIn } = useStateContext();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
