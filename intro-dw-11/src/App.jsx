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
          <Route path="/" element={
            <LayoutComponent
              leftColSize={{ xs: 0, sm: 0, md: 4, lg: 6 }}
              rightColSize={{ xs: 24, sm: 24, md: 24, lg: 18 }}
              leftContent={<ImagenLogin />}
              rightContent={<FormLogin />}
            />
          } />
        
          <Route path="*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
