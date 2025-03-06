import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Components/dashboard/dashboardNavbar';

const DashboradLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
};

export default DashboradLayout;
