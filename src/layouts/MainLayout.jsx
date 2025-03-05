import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const location = useLocation();
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    if (
      location.pathname.toString() == '/dashboard/requests' ||
      location.pathname.toString() == '/dashboard/brands' ||
      location.pathname.toString() == '/dashboard'
    ) {
      setIsDashboard(true);
    }
  }, []);

  return (
    <>
      {!isDashboard ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default MainLayout;
