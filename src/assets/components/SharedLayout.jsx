import React from 'react';
import Footer from "/src/assets/components/Footer/Footer";
import { Outlet } from 'react-router-dom';
import Navbar from "/src/assets/components/Navbar/Navbar";;

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
