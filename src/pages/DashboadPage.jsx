import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DashboadNavbar from '../Components/Dashboad/DashboadNavbar';

const DashboadPage = () => {
  // const location = useLocation();
  // const user = location.state?.userD;

  // console.log(location.state?.userD);
  // console.log(user);

  return (
    <section className="w-full max-w-7xl mx-auto">
      <dashboadNavbar />
      {/* <h1 className="text-4xl">
        hello {user?.role} {user?.name} to DashboadPage
      </h1> */}
      <Outlet />
    </section>
  );
};

export default DashboadPage;
