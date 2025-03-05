import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import { useEffect, useState } from 'react';

const MainLayout = () => {
  // const location = useLocation();
  // const [isdashborad, setIsdashborad] = useState(false);

  // useEffect(() => {
  //   if (
  //     location.pathname.toString() === '/dashboard/requests' ||
  //     location.pathname.toString() === '/dashboard/brands' ||
  //     location.pathname.toString() === '/dashboard/team' ||
  //     location.pathname.toString() === '/dashboard'
  //   ) {
  //     setIsdashborad(true);
  //   } else {
  //     setIsdashborad(false);
  //   }
  // }, [location.pathname]);

  // console.log(!isdashborad);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
