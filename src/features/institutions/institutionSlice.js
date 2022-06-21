/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [null];

const institutionSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addInstitution: (state, action) => {
      console.log(action);
      state.push(action.payload);
    },

    updateInstitution: (state, action) => {
      const { id, name, email } = action.payload;
      const existingInstitution = state.find((institution) => institution.id === id);
      if (existingInstitution) {
        existingInstitution.name = name;
        existingInstitution.email = email;
      }
    },

    deleteInstitution: (state, action) => {
      const { id } = action.payload;
      const existingInstitution = state.find(
        (institution) => institution.id === id,
      );
      if (existingInstitution) {
        return state.filter((institution) => institution.id !== id);
      }
    },
  },
});

export const { addInstitution, updateInstitution, deleteInstitution } = institutionSlice.actions;
export default institutionSlice.reducer;
