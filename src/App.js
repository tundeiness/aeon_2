import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import PageLoader from './components/pageLoader/pageLoader';

import routes from './Routes';
import './App.css';

const App = () => {
  const elements = useRoutes(routes);
  return <Suspense fallback={<PageLoader />}>{elements}</Suspense>;
};

export default App;
