import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboradNavbar from '../Components/dashboard/dashboardNavbar';

const DashboradLayout = () => {
  return (
    <>
      <DashboradNavbar />
      <Outlet />
    </>
  );
};

export default DashboradLayout;
