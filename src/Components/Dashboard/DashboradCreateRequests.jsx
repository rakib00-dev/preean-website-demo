import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { BrandCards } from './DashboardBrands';
import { useState } from 'react';

const DashboradCreateRequests = () => {
  const categoryData = [
    {
      src: '/images/dashboard/requests/brand-identity-design.png',
      title: 'brand identity design',
    },
    {
      src: '/images/dashboard/requests/print-design.png',
      title: 'print design',
    },
    {
      src: '/images/dashboard/requests/web-design.png',
      title: 'web design',
    },
    {
      src: '/images/dashboard/requests/digital-design.png',
      title: 'digital design',
    },
    {
      src: '/images/dashboard/requests/illustration.png',
      title: 'illustration design',
    },
    {
      src: '/images/dashboard/requests/corporate-design.png',
      title: 'corporate design',
    },
  ];

  const productData = [
    {
      src: '/images/dashboard/requests/email-graphics.png',
      title: 'email graphics',
    },
    {
      src: '/images/dashboard/requests/print-design.png',
      title: 'print design',
    },
    {
      src: '/images/dashboard/requests/digital-ads.png',
      title: 'digital ads',
    },
    {
      src: '/images/dashboard/requests/social-media-graphics.png',
      title: 'social media graphics',
    },
    {
      src: '/images/dashboard/requests/gifs.png',
      title: 'GIFs',
    },
    {
      src: '/images/dashboard/requests/e-books.png',
      title: 'e books',
    },
  ];

  console.log(categoryData[0].src);

  return (
    <section className="mx-50">
      <div className="grid gap-8">
        <div className="flex justify-between items-center relative">
          <div
            className="absolute cursor-pointer border p-1 -left-10 "
            onClick={() => navigate(-1)}
          >
            <IoIosArrowBack className="transition-all duration-300 text-2xl text-gray-500 hover:text-gray-700" />
          </div>
          <h1 className="text-4xl">Create Request</h1>
          {/* <div className="flex justify-center items-center py-4 px-2 cursor-pointer">
            <BsThreeDots className="text-2xl" />
          </div> */}
        </div>
        <div className="flex items-center text-gray-500 -mt-4">
          <span className="text-blue-500">Requests</span>{' '}
          <IoIosArrowBack className="text-md text-gray-500 rotate-180" /> Create
        </div>
        <div className="grid gap-2">
          <h3 className="text-xl flex justify-start items-end">
            Name Your Request
          </h3>
          <input
            type="text"
            placeholder="Enter Your Request"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <h3 className="text-xl flex justify-start items-end">Description</h3>
          <div className="grid gap-3 grid-cols-3">
            <BrandCards />
          </div>
        </div>

        <div>
          <h3 className="text-xl flex justify-start items-end">
            Choose a category
          </h3>
          <div className="grid gap-3 grid-cols-4 my-5">
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={categoryData[0].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{categoryData[0].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={categoryData[1].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{categoryData[1].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={categoryData[2].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{categoryData[2].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={categoryData[3].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{categoryData[3].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={categoryData[4].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{categoryData[4].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={categoryData[5].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{categoryData[5].title}</h5>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl flex justify-start items-end">
            Choose a product
          </h3>
          <div className="grid gap-3 grid-cols-4 my-5">
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={productData[0].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{productData[0].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={productData[1].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{productData[1].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={productData[2].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{productData[2].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={productData[3].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{productData[3].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={productData[4].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{productData[4].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={productData[5].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5>{productData[5].title}</h5>
            </div>
          </div>
        </div>

        <div className="mt-80"></div>
      </div>
    </section>
  );
};

export default DashboradCreateRequests;
