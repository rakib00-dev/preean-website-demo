import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.toString() !== '/dashboard' ? (
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
