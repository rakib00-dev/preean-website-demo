import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { BrandCards } from './DashboardBrands';
import { useState } from 'react';
import { MdFormatBold, MdFormatListBulleted } from 'react-icons/md';
import { FaItalic, FaLink } from 'react-icons/fa';

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

        <form>
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
            <div class="flex items-center justify-between px-3 py-2 border-b border-gray-200 ">
              <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse ">
                <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                  >
                    <MdFormatBold className="text-2xl" />
                  </button>

                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                  >
                    <FaItalic />
                  </button>
                </div>
                <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                  >
                    <FaLink />
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                      />
                    </svg>
                    <span class="sr-only">Add list</span>
                  </button>

                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                  >
                    <MdFormatListBulleted className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div class="px-4 py-2 bg-white rounded-b-lg ">
              <label for="editor" class="sr-only">
                Publish post
              </label>
              <textarea
                id="editor"
                rows="8"
                class="block w-full px-0 text-sm text-gray-800 bg-white border-0 font-medium focus:ring-0 p-4 outline-none"
                placeholder={`We are a small B2B/B2C company providing solutions in Digital Marketing and I am looking for a new logo that focuses on:
      * Social Media
      * Young Entrepreneurs
      * Market Leaders`}
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </form>

        <div className="mt-80"></div>
      </div>
    </section>
  );
};

export default DashboradCreateRequests;
