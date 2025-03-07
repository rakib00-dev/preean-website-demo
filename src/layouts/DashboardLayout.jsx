import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';

const DashboradLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
      <div className="mt-15"></div>
    </>
  );
};

export default DashboradLayout;
