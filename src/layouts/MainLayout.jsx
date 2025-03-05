import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
// import { useEffect, useState } from 'react';

const MainLayout = () => {
  // const location = useLocation();
  // const [isdashboad, setIsdashboad] = useState(false);

  // useEffect(() => {
  //   if (
  //     location.pathname.toString() === '/dashboad/requests' ||
  //     location.pathname.toString() === '/dashboad/brands' ||
  //     location.pathname.toString() === '/dashboad/team' ||
  //     location.pathname.toString() === '/dashboad'
  //   ) {
  //     setIsdashboad(true);
  //   } else {
  //     setIsdashboad(false);
  //   }
  // }, [location.pathname]);

  // console.log(!isdashboad);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
