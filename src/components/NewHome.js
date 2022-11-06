import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
const NewHome = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default NewHome;