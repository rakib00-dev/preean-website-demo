import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowBack, IoMdArrowDropright } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const DashboardCreateBrand = () => {
  const navigate = useNavigate();

  return (
    <section className="mx-50">
      <div className="grid gap-4">
        <div className="flex justify-between items-center relative">
          <div
            className="absolute cursor-pointer border p-1 -left-10 "
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className="transition-all duration-300 text-2xl text-gray-500 hover:text-gray-700" />
          </div>
          <h1 className="text-4xl"> ManyPixel</h1>
          <div className="flex justify-center items-center py-4 px-2 cursor-pointer">
            <BsThreeDots className="text-2xl" />
          </div>
        </div>
        <div className="flex items-center text-gray-500 -mt-4">
          <span className="text-blue-500">brand</span>{' '}
          <IoIosArrowBack className="text-md text-gray-500 rotate-180" />{' '}
          manypixels
        </div>
        <div>
          <h3 className="text-xl flex justify-start items-end">Industry</h3>
          <p>Design & Marketing Agencies</p>
        </div>
        <div>
          <h3 className="text-xl flex justify-start items-end">Description</h3>
          <p>
            Get your personal graphic designer in a few clicks. ManyPixels gives
            you a professional designer to help you with all of your creative
            needs. No interviews, no contracts, unlimited designs.
          </p>
        </div>
        <div>
          <h3 className="text-xl flex justify-start items-end">Website</h3>
          <a href="https://www.manypixels.co" className="text-blue-500">
            www.manypixels.co
          </a>
        </div>
        <div className="grid gap-3 grid-cols-3"></div>
      </div>
    </section>
  );
};

export default DashboardCreateBrand;

const Cards = ({ src, title, usedInReq }) => {
  return (
    <>
      <div className="transition-all duration-200 flex justify-between items-center gap-2 py-2 px-4 border border-gray-200 rounded-xl bg-gray-100 cursor-pointer hover:bg-blue-100">
        <div className="flex gap-2 justify-start">
          <img src={src} alt="" loading="lazy" className="w-12 rounded-full" />
          <div>
            <h3>{title}</h3>
            <p>used in {usedInReq} requests</p>
          </div>
        </div>
        <div className="flex justify-center items-center py-4 px-2 cursor-pointer">
          <BsThreeDots />
        </div>
      </div>
    </>
  );
};
