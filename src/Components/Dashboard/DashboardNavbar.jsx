import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mb-6">
      <div className="flex justify-between bg-[#0f2333] py-7 px-7">
        <div className="flex justify-center items-center gap-10">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              scrollToTop();
            }}
          >
            <img
              src="https://designpro.qa/img/Designpro-logo-large.png"
              alt="logo"
              className="w-40 invert"
              loading="lazy"
            />
          </Link>
          <Link className="font-bold text-white">Requests</Link>
          <Link className="font-bold text-white">Brands</Link>
          <Link className="font-bold text-white">Team</Link>
        </div>
        <div>
          <button className="transition-all duration-300 text-sm font-bold text-white uppercase py-2 px-3 bg-blue-600 hover:bg-blue-400">
            Upgrade
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardNavbar;
