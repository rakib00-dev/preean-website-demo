import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardNavbar from '../Components/Dashboard/DashboardNavbar';

const DashboardPage = () => {
  const location = useLocation();
  const user = location.state?.userD;

  console.log(location.state?.userD);
  console.log(user);

  // if (!user) {
  //   return null;
  // }

  return (
    <section className="w-full max-w-7xl mx-auto">
      <DashboardNavbar />
      <h1 className="text-4xl">
        hello {user?.role} {user?.name} to DashboardPage
      </h1>
      <Outlet />
    </section>
  );
};

export default DashboardPage;
