import React from 'react';
import { ConfigProvider } from 'antd';
import './styles/variables.css';
import LayoutComponent from './layouts/LayoutComponent';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes';
import Nav from './components/Nav';  
import FormLogin from './components/FormLogin';
import ImagenLogin from './components/ImageLogin';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2874A6"
        }
      }}
    >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
