import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboadNavbar from '../Components/Dashboad/DashboadNavbar';

const dashboadLayout = () => {
  return (
    <>
      <DashboadNavbar />
      <Outlet />
    </>
  );
};

export default dashboadLayout;
