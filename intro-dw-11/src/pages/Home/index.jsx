import React from 'react';
import LayoutComponent from '../../layouts/LayoutComponent';
import ImagenLogin from '../../components/ImageLogin';
import FormLogin from '../../components/FormLogin';

const Home = () => {
  return (
    <LayoutComponent
      leftColSize={{ xs: 0, sm: 0, md: 4, lg: 6 }}
      rightColSize={{ xs: 24, sm: 24, md: 24, lg: 18 }}
      leftContent={<ImagenLogin />}
      rightContent={<FormLogin />}
    />
  );
};

export default Home;
