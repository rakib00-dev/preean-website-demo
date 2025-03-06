import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';

const DashboradLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
};

export default DashboradLayout;
