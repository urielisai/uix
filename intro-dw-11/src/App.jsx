import React from 'react';
import { ConfigProvider } from 'antd';
import './styles/variables.css';
import LayoutComponent from './layouts/LayoutComponent';
import './App.css'
import FormLogin from './components/FormLogin'
import ImagenLogin from './components/ImageLogin'
function App() {


  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2874A6"
        }
      }}
    >
      <LayoutComponent
        leftColSize={{ xs: 0, sm: 0, md: 4, lg: 6 }} // Corrige aquí
        rightColSize={{ xs: 24, sm: 24, md: 24, lg: 18 }} // Corrige aquí
        leftContent={<ImagenLogin />} // Corrige aquí
        rightContent={<FormLogin />} // Corrige aquí
      />
      
    </ConfigProvider>
  )
}

export default App
