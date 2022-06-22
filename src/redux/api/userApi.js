import axios from 'axios';

const userLogin = async (formData) => {
  try {
    const res = await axios.post('http;//13.59.94.46/aeon/api/v1/SignIn', formData);
    console.log(res);
    return res.data;
  } catch (error) {

  }
};

// export const updateUser = createAsyncThunk("users/update", async (user) => {
//   const res = await axios.post(
//     "http://13.59.94.46/aeon/api/v1/Institution/EnableDisable",
//     user
//   );
//   return res.data;
// });
