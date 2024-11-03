import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Inspiracion from '../pages/Inspiracion';
import Tienda from '../pages/Tienda';
import Sucursales from '../pages/Sucursales';
import Hogar from  '../pages/Hogar';
import Register from '../pages/Register';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/login', element: <Login /> },
    {path: '/Register', element: <Register/>},
    {path:'/Hogar', element:<Hogar/>},
    { path: '/', element: <Home /> },
    { path: '/Inspiracion', element: <Inspiracion /> },
    { path: '/Tienda' , element: <Tienda /> },
    { path: '/Sucursales', element: <Sucursales /> }
  ]);

  return routes;
};

export default AppRoutes;
