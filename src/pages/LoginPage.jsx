import React from 'react';
import LoginCard from '../Components/LoginPage/LoginCard';
import { useContext } from 'react';
import { AuthProvider } from '../provider/Provider';

const LoginPage = () => {
  // const { user, loading } = useContext(AuthProvider);
  // console.log(user, loading);

  return (
    <section className="w-full max-w-7xl mx-auto">
      <LoginCard />
    </section>
  );
};

export default LoginPage;
