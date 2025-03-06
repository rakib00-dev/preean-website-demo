import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Components/Dashboard/dashboardNavbar';

const DashboradLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
};

export default DashboradLayout;
