import React from 'react';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const dashboradRequests = () => {
  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">Requests</h1>
          <div className="flex items-center gap-2">
            <div className="flex justify-center gap-1 items-center bg-gray-50 roudned shadow-md border px-2 border-gray-200 py-1.5">
              <HiOutlineMagnifyingGlass
                className="text-[#48c8ff] font-extrabold"
                stroke="blue"
              />
              <input
                type="search"
                placeholder="Search"
                className="pl-3 pr-4 outline-none placeholder:text-gray-400 w-60"
              />
            </div>
            <Link
              to={'/dashboard/create-request'}
              className="flex text-md bg-blue-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-blue-400 cursor-pointer"
            >
              <GoPlus className="text-xl" /> Create Request
            </Link>
          </div>
        </div>
        <div className="flex gap-2 w-full border-b-2 border-gray-200">
          <NavLink>Queue</NavLink>
          <NavLink>Delivered</NavLink>
        </div>
        <div className="my-7">
          <h3 className="text-lg flex justify-start items-end">
            Active
            <IoMdArrowDropright className="transition-all duration-300 text-xl rotate-90 text-blue-500" />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default dashboradRequests;
