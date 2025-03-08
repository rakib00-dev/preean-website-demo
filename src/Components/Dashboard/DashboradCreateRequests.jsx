import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { BrandCards } from './DashboardBrands';
import { useState } from 'react';
import { MdFormatBold, MdFormatListBulleted } from 'react-icons/md';
import { FaItalic, FaLink, FaUpload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DashboardCreateRequests = () => {
  const navigate = useNavigate();

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

  const fileDalivarableData = [
    {
      src: '/images/dashboard/requests/artist.png',
      title: 'Let my designer choose',
    },
    {
      src: '/images/dashboard/requests/jpg.png',
      title: 'JPG',
    },
    {
      src: '/images/dashboard/requests/png.png',
      title: 'PNG',
    },
    {
      src: '/images/dashboard/requests/illustrator.png',
      title: 'AI',
    },
    {
      src: '/images/dashboard/requests/photoshop.png',
      title: 'PSD',
    },
    {
      src: '/images/dashboard/requests/indesign.png',
      title: 'INDD',
    },
    {
      src: '/images/dashboard/dot-file.png',
      title: 'Others',
    },
  ];

  return (
    <section className="px-50 max-w-7xl w-full mx-auto">
      <form className="grid gap-8">
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
            required
          />
        </div>
        <div>
          <h3 className="text-xl flex justify-start items-end">
            Select a brand
          </h3>
          <div className="grid gap-3 grid-cols-3 my-4">
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

        <div className="w-full grid gap-3 h-full my-6">
          <h3 className="text-xl flex gap-2 justify-start items-end">
            Describe your request
          </h3>
          <p className="text-gray-500">
            Format your paragraphs and create checklists to make your
            description easy to read and follow. Well-written instructions will
            result in better designs.
          </p>
          <div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
              <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 ">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse ">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                    >
                      <MdFormatBold className="text-2xl" />
                    </button>

                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                    >
                      <FaItalic />
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                    >
                      <FaLink />
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                        />
                      </svg>
                      <span className="sr-only">Add list</span>
                    </button>

                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-sm cursor-pointer hover:text-gray-900 hover:bg-gray-100   "
                    >
                      <MdFormatListBulleted className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-white rounded-b-lg ">
                <label htmlFor="editor" className="sr-only">
                  Publish post
                </label>
                <textarea
                  id="editor"
                  rows="8"
                  className="block w-full px-0 text-sm text-gray-800 bg-white border-0 font-medium focus:ring-0 p-4 outline-none"
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
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish post
            </button>
          </div>
        </div>

        <div className="w-full grid gap-3 h-full my-8">
          <h3 className="text-xl flex gap-2 justify-start items-end">
            Attachments <span className="text-gray-400"> (Optional)</span>
          </h3>
          <p className="text-gray-500">
            Upload any images, files, or examples that may be helpful in
            explaining your request here.
          </p>
          <div className="flex justify-center items-center gap-3 h-40 w-full">
            <label className="gap-1 h-full w-full border border-gray-200 rounded text-blue-500 bg-gray-100 cursor-pointer flex flex-col justify-center items-center font-semibold">
              <FaUpload />
              Upload Files
              <input type="file" className="hidden" />
              <input type="" className="hidden" />
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-xl flex justify-start items-end">
            File deliverables
          </h3>
          <p className="text-gray-400">Select the file types you need</p>
          <div className="grid gap-3 grid-cols-4 my-5">
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[0].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[0].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[1].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[1].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[2].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[2].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[3].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[3].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[4].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[4].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[5].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[5].title}</h5>
            </div>
            <div className="grid place-items-center border-2 cursor-pointer border-gray-200 p-4">
              <img
                src={fileDalivarableData[6].src}
                alt=""
                loading="lazy"
                className="w-12"
              />
              <h5 className="text-center">{fileDalivarableData[6].title}</h5>
            </div>
          </div>
        </div>

        <div className="my-12 flex justify-between">
          <button
            className="transition-all duration-200 font-bold cursor-pointer px-5 py-2 border-b-2 border-transparent hover:text-gray-400 hover:border-gray-400"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>

          <button className="transition-all duration-300 font-bold border border-gray-300 px-8 cursor-pointer py-2 bg-blue-500 text-white hover:bg-blue-400 hover:rounded">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default DashboardCreateRequests;
