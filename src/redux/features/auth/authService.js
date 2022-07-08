import axios from 'axios';

const SIGN_IN = 'http://13.59.94.46/aeon/api/v1/SignIn';

// const register = async (userData) => {
//   const response = await axios.post(SIGN_IN, userData);

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data));
//   }

//   return response.data;
// };

const login = async (userData) => {
  const response = await axios.post(SIGN_IN, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  // register,
  login,
};

export default authService;
