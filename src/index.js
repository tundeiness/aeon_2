/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ContextProvider } from './contexts/ContextProvider';
import App from './App';
// import { store } from './app/store';
import { getInstitution } from './redux/features/institutionSlice';
import store from './redux/store';

store.dispatch(getInstitution()); // for immediate loading of data.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter forceRefresh>
    <React.StrictMode>
      <Provider store={store}>
        <ContextProvider>

          <App />

        </ContextProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);
