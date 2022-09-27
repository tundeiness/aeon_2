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

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  role: Yup.string().required('Role is required'),
  // password: Yup.string()
  //   .concat(isAddMode ? Yup.string().required('Password is required') : null)
  //   .min(6, 'Password must be at least 6 characters'),
  // confirmPassword: Yup.string()
  //   .when('password', (password, schema) => {
  //     if (password || isAddMode) { return schema.required('Confirm Password is required'); }
  //   })
  //   .oneOf([Yup.ref('password')], 'Passwords must match'),
});
