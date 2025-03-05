import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import dashboradNavbar from '../Components/dashboard/dashboardNavbar';

const dashboardPage = () => {
  // const location = useLocation();
  // const user = location.state?.userD;

  // console.log(location.state?.userD);
  // console.log(user);

  return (
    <section className="w-full max-w-7xl mx-auto">
      <dashboradNavbar />
      {/* <h1 className="text-4xl">
        hello {user?.role} {user?.name} to dashboardPage
      </h1> */}
      <Outlet />
    </section>
  );
};

export default dashboardPage;
