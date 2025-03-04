import React from 'react';
import { useLocation } from 'react-router-dom';

const DashboardPage = () => {
  const location = useLocation();
  const user = location.state?.userD;

  console.log(location.state.userD);
  console.log(user);

  return (
    <h1 className="text-4xl">
      hello {user?.role} {user?.name} to DashboardPage
    </h1>
  );
};

export default DashboardPage;
