/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
// import { useStateContext } from '../../contexts/ContextProvider';

const Protected = ({ children, user }) => {
  // const { isLoggedIn } = useStateContext();
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
