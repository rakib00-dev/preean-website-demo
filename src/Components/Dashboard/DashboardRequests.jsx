import React from 'react';
import { GoPlus } from 'react-icons/go';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoMdArrowDropright } from 'react-icons/io';

const DashboardRequests = () => {
  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">Requests</h1>
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-gray-100 shadow-md border px-4 border-gray-200 py-1.5">
              <HiOutlineMagnifyingGlass />
              <input type="search" />
            </div>
            <button className="flex text-lg bg-blue-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-blue-400 cursor-pointer">
              <GoPlus className="text-xl" /> Create Request
            </button>
          </div>
        </div>
        <p
          className="w-96 mb-7"
          style={{ color: 'var(--black-primary-terms)' }}
        >
          Store all your requests assets in one place. This will help you save
          time when submitting new requests.
        </p>
        <div>
          <h3 className="text-xl flex justify-start items-end">
            requests
            <IoMdArrowDropright className="transition-all duration-300 text-2xl rotate-90 text-blue-500" />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default DashboardRequests;
