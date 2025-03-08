import React, { useEffect, useState } from 'react';
import { BsFillTicketPerforatedFill } from 'react-icons/bs';
import { CiBellOn, CiDeliveryTruck } from 'react-icons/ci';
import { FaShop } from 'react-icons/fa6';
import { GiUpgrade } from 'react-icons/gi';
import { IoMdArrowDropright } from 'react-icons/io';
import { LuTicket } from 'react-icons/lu';
import { MdAddBusiness } from 'react-icons/md';
import { TiGroup, TiGroupOutline, TiHome, TiTicket } from 'react-icons/ti';
import { Link, NavLink, useLocation } from 'react-router-dom';

const dashboardNavbar = () => {
  const [dashboard, SetDashboard] = useState(false);
  const [req, SetReq] = useState(false);
  const [brand, SetBrand] = useState(false);
  const [team, SetTeam] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      SetDashboard(true);
    } else if (
      location.pathname === '/dashboard/req' ||
      location.pathname === '/dashboard/brands/create-request'
    ) {
      SetReq(true);
    } else if (
      location.pathname === '/dashboard/brands' ||
      location.pathname === '/dashboard/brands/create-brand'
    ) {
      SetBrand(true);
    } else if (location.pathname === '/dashboard/team') {
      SetTeam(true);
    }
  }, []);
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
              src="/images/navbar/Designpro-logo-white-large.png"
              alt="logo"
              className="w-40"
              loading="lazy"
            />
          </Link>
          <NavLink
            to={'/dashboard'}
            className={
              dashboard
                ? 'flex items-center gap-2 transition-all duration-300 font-bold text-green-500 border-b-2 border-green-400 hover:text-green-400'
                : 'flex items-center gap-2 transition-all duration-300 font-bold text-white border-b-2 border-transparent hover:border-gray-400'
            }
            onClick={() => {
              SetDashboard(true);
              SetReq(false);
              SetBrand(false);
              SetTeam(false);
            }}
          >
            <TiHome />
            Dashboard
          </NavLink>
          <NavLink
            to={'/dashboard/req'}
            className={
              req
                ? 'flex items-center gap-2 transition-all duration-300 font-bold text-green-500 border-b-2 border-green-400 hover:text-green-400'
                : 'flex items-center gap-2 transition-all duration-300 font-bold text-white border-b-2 border-transparent hover:border-gray-400'
            }
            onClick={() => {
              SetDashboard(false);
              SetReq(true);
              SetBrand(false);
              SetTeam(false);
            }}
          >
            <BsFillTicketPerforatedFill />
            Requests
          </NavLink>
          <NavLink
            to={'/dashboard/brands'}
            className={
              brand
                ? 'flex items-center gap-2 transition-all duration-300 font-bold text-green-500 border-b-2 border-green-400 hover:text-green-400'
                : 'flex items-center gap-2 transition-all duration-300 font-bold text-white border-b-2 border-transparent hover:border-gray-400'
            }
            onClick={() => {
              SetDashboard(false);
              SetReq(false);
              SetBrand(true);
              SetTeam(false);
            }}
          >
            <FaShop />
            Brands
          </NavLink>
          <NavLink
            to={'/dashboard/team'}
            className={
              team
                ? 'flex items-center gap-2 transition-all duration-300 font-bold text-green-500 border-b-2 border-green-400 hover:text-green-400'
                : 'flex items-center gap-2 transition-all duration-300 font-bold text-white border-b-2 border-transparent hover:border-gray-400'
            }
            onClick={() => {
              SetDashboard(false);
              SetReq(false);
              SetBrand(false);
              SetTeam(true);
            }}
          >
            <TiGroup />
            team
          </NavLink>
        </div>
        <div className="flex gap-2">
          <button className="flex gap-2 items-center transition-all  duration-300 text-sm font-bold text-white uppercase py-2 px-3 bg-gradient-to-r rounded from-[#38ffa5d2] via-[#04fd57d9] to-[#2adb3fca] hover:from-[#2adb3fca] hover:to-[#38ffa5d2] cursor-pointer">
            <GiUpgrade />
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
