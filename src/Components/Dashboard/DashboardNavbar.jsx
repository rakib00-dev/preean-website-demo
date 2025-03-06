import React from 'react';
import { CiBellOn } from 'react-icons/ci';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const dashboardNavbar = () => {
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
          <NavLink
            to={'/dashboard/req'}
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-300 font-bold text-blue-500 border-b-2 border-blue-400 hover:text-blue-400'
                : 'transition-all duration-300 font-bold text-white hover:border-b'
            }
          >
            Requests
          </NavLink>
          <NavLink
            to={'/dashboard/brands'}
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-300 font-bold text-blue-500 border-b-2 border-blue-400 hover:text-blue-400'
                : 'transition-all duration-300 font-bold text-white hover:border-b'
            }
          >
            Brands
          </NavLink>
          <NavLink
            to={'/dashboard/team'}
            className={({ isActive }) =>
              isActive
                ? 'transition-all duration-300 font-bold text-blue-500 border-b-2 border-blue-400 hover:text-blue-400'
                : 'transition-all duration-300 font-bold text-white hover:border-b'
            }
          >
            Team
          </NavLink>
        </div>
        <div className="flex gap-2">
          <button className="transition-all duration-300 text-sm font-bold text-white uppercase py-2 px-3 bg-blue-600 hover:bg-blue-400 cursor-pointer hover:">
            Upgrade
          </button>
          {/* <button className="flex justify-center items-center  cursor-pointer">
            <RiQuestionnaireLine className="transition-all duration-300 invert text-3xl font-light hover:invert-50" />
          </button> */}
          <button className="flex justify-center items-center cursor-pointer">
            <CiBellOn className="transition-all duration-300 invert text-3xl font-light hover:invert-50" />
          </button>
          <div>
            <div className="flex justify-center items-center gap-3 cursor-pointer profile">
              <img
                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1741149670~exp=1741153270~hmac=3a544d2ac44c0503378a035b0b61386fdfee87310462aaa91020e354fb51c294&w=996"
                alt=""
                loading="lazy"
                className="w-10 rounded-full"
              />
              <h5
                className="flex justify-center items-center transition-all duration-300"
                style={{ color: 'white' }}
              >
                Mr. Name
                <IoMdArrowDropright className="transition-all duration-300 text-2xl rotate-90" />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dashboardNavbar;
