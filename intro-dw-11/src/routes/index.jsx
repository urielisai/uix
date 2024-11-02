import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Inspiration from '../pages/Inspiration';
import Store from '../pages/Store';
import Branches from '../pages/Branches';
import Register from '../pages/Register'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/login', element: <Login /> },
    {path: '/Register', element: <Register/>},
    { path: '/', element: <Home /> },
    { path: '/Inspiration', element: <Inspiration /> },
    { path: '/Store', element: <Store /> },
    { path: '/Branches', element: <Branches /> }
  ]);

  return routes;
};

export default AppRoutes;
