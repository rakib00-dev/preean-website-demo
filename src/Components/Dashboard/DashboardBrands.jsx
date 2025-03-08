import { useContext, useState } from 'react';
import { BsShop, BsThreeDots } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const DashboradBrands = () => {
  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="flex items-center gap-2 text-4xl">
            <BsShop />
            Brands
          </h1>
          <Link
            to={'/dashboard/brands/create-brand'}
            className="flex text-lg bg-green-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-green-400 cursor-pointer"
          >
            <GoPlus className="text-xl" /> Create Brand
          </Link>
        </div>
        <p
          className="w-96 mb-7"
          style={{ color: 'var(--black-primary-terms)' }}
        >
          Store all your brand assets in one place. This will help you save time
          when submitting new requests.
        </p>
        <div>
          <h3 className="text-xl flex justify-start items-end">
            brands
            <IoMdArrowDropright className="transition-all duration-300 text-2xl rotate-90 text-green-500" />
          </h3>
        </div>
        <div className="grid gap-3 grid-cols-3">
          <BrandCards />
        </div>
      </div>
    </section>
  );
};

export default DashboradBrands;

export const BrandCards = () => {
  const brandArr = [
    {
      src: 'https://yt3.googleusercontent.com/OqN3DP0rwXrSBvzuAgfeEGwkdhheV93iWz5KsyMeCgk11AJ9B_F2FvIDTN06cNmQ310twIsU5xU=s160-c-k-c0x00ffffff-no-rj',
      title: 'ManyPixels',
      usedInReq: 29,
    },
    {
      src: 'https://www.logodesignlove.com/wp-content/uploads/2021/07/coca-cola-logo-arden-square-01.jpg',
      title: 'Coca Cola',
      usedInReq: 63,
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg',
      title: "Mc Donald's",
      usedInReq: 23,
    },
    {
      src: 'https://media.designrush.com/tinymce_images/763811/conversions/UPS-logo-content.jpg',
      title: 'UPS',
      usedInReq: 11,
    },
  ];

  // const brand = useContext();

  const [brand, setBrand] = useState([...brandArr]);

  return (
    <>
      {brand.map((e, i) => (
        <Card key={i} title={e.title} usedInReq={e.usedInReq} src={e.src} />
      ))}
    </>
  );
};

const Card = ({ src, title, usedInReq }) => {
  return (
    <>
      <div className="transition-all duration-200 flex justify-between items-center gap-2 py-2 px-4 border border-gray-200 rounded-xl bg-gray-100 cursor-pointer hover:bg-green-100">
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
