/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { updateSuccess, updateStart, updateError } from '../features/userSlice';

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await fetch(
      'http://13.59.94.46/aeon/api/v1/Institution/RetrieveAll',
    );
    dispatch(updateSuccess(res.json()));
  } catch (error) {
    dispatch(updateError());
  }
};
