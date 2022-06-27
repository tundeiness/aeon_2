/* eslint-disable import/prefer-default-export */

import * as Yup from 'yup';

export const CreateInstitutionSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must be 3 characters at minimum')
    .required('Password is required'),
});
