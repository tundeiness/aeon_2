/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import {
  Routes, Route, useRoutes, useLocation,
} from 'react-router-dom';
import PageLoader from './components/pageLoader/pageLoader';
import Dashboard from './pages/layout/dashboard/dashboard';
import Institutions from './pages/layout/institutions/institutions';
import Modal from './pages/layout/institutions/deleteInstitution/DeleteInstitution';
import PrivateRoute from './utils/PrivateRoute';

import routes from './Routes';
import './App.css';

const App = () => {
  // const elements = useRoutes(routes);
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <Suspense fallback={<PageLoader />}>
      {/* {elements} */}

      <Routes location={background || location}>
        <Route path="/" element={<Institutions />}>
          <Route path="/delete-institution" element={<Modal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default App;
