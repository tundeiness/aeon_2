/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ContextProvider } from './contexts/ContextProvider';
import App from './App';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter forceRefresh>
    <React.StrictMode>
      <ContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ContextProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
