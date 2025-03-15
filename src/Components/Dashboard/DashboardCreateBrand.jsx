import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowBack, IoMdArrowDropright } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const DashboardCreateBrand = () => {
  const navigate = useNavigate();

  return (
    <section className="px-50 max-w-7xl w-full mx-auto">
      <div className="grid gap-8">
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
          <span className="text-green-500">brand</span>{' '}
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
          <a
            target="_blank"
            href="https://www.manypixels.co"
            className="text-green-500 hover:underline"
          >
            www.manypixels.co
          </a>
        </div>
        <div className="grid gap-3">
          <h3 className="text-xl flex justify-start items-end">Colors</h3>
          <ColorPalette />
        </div>

        <div className="grid gap-3">
          <h3 className="text-xl flex justify-start items-end">Logos</h3>
          <LogoGallery />
        </div>

        <div className="grid gap-3">
          <h3 className="text-xl flex justify-start items-end">Brand Guides</h3>
          <BrandGuids />
        </div>

        <div className="grid">
          <h3 className="text-xl flex justify-start items-end">Fonts</h3>
          <p className="text-gray-500 mb-4">
            only files with .zip, .ttf, .otf format are allowed
          </p>
          <FontUpload />
        </div>
        <div className="my-12 flex justify-between">
          <button
            className="transition-all duration-200 font-bold cursor-pointer px-5 py-2 border-b-2 border-transparent hover:text-gray-400 hover:border-gray-400"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>

          <button className="transition-all duration-300 font-bold border border-gray-300 px-8 cursor-pointer py-2 bg-green-500 text-white hover:bg-green-400 hover:rounded">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardCreateBrand;

const ColorPalette = () => {
  const colors = [
    { hex: '#0099f5', label: 'Primary Colour' },
    { hex: '#0a31c2', label: 'Primary Colour' },
    { hex: '#f0457d', label: 'Primary Colour' },
    { hex: '#ffb44d', label: 'Secondary Colour' },
    { hex: '#08122b', label: 'Secondary Colour' },
    { hex: '#ffffff', label: 'Secondary Colour' },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      <div className="flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-20 text-gray-500 cursor-pointer">
        + Add Color
      </div>
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex gap-2 items-center justify-between border border-gray-300 rounded-lg p-2 shadow-md cursor-pointer"
        >
          <div className="flex gap-2">
            <div
              className="w-12 h-12 rounded-md"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="grid">
              <span className="text-sm font-medium mt-2">{color.hex}</span>
              <span className="text-xs text-gray-500">{color.label}</span>
            </div>
          </div>
          <div className="flex justify-center items-center py-4 px-2 cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
      ))}
    </div>
  );
};

const LogoGallery = () => {
  const logos = [
    {
      src: 'https://yt3.googleusercontent.com/OqN3DP0rwXrSBvzuAgfeEGwkdhheV93iWz5KsyMeCgk11AJ9B_F2FvIDTN06cNmQ310twIsU5xU=s160-c-k-c0x00ffffff-no-rj',
      name: 'Favicon.png',
      size: '6 kB',
    },
    {
      src: 'https://www.logodesignlove.com/wp-content/uploads/2021/07/coca-cola-logo-arden-square-01.jpg',
      name: 'safe area black yellow tra...',
      size: '7 kB',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/McDonald%27s_logo.svg',
      name: 'safe area black green trans...',
      size: '7 kB',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      <fieldset className="w-fit space-y-1">
        <label
          htmlFor="files"
          className="gap-1 border-2 border-dashed h-full w-full border-gray-200 rounded  bg-gray-100 cursor-pointer flex flex-col justify-center items-center font-semibold"
        >
          <span className="text-green-500 w-full text-center border-b-2 border-dashed p-2 border-gray-200">
            + Add Logos
          </span>
          <input
            type="file"
            name="files"
            placeholder="Add Fonts"
            id="files"
            className="px-4 py-12 cursor-pointer rounded-md"
            multiple
            onChange={(e) => {
              console.log(e.target.files[0].name, e.target.files[0].type);
            }}
          />
          {/* <input type="file" className="hidden" />
            <input type="" className="hidden" /> */}
        </label>
      </fieldset>
      {}
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border border-gray-300 rounded-lg  py-2 px-8 w-40 shadow-md "
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
          <span className="text-sm font-medium mt-2">{logo.name}</span>
          <span className="text-xs text-gray-500">{logo.size}</span>
        </div>
      ))}
    </div>
  );
};

const BrandGuids = () => {
  const logos = [
    {
      src: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      name: 'Favicon.png',
      size: 6,
    },
  ];

  return (
    <div className="flex gap-4">
      <fieldset className="w-fit space-y-1">
        <label
          htmlFor="files"
          className="gap-1 border-2 border-dashed h-full w-full border-gray-200 rounded  bg-gray-100 cursor-pointer flex flex-col justify-center items-center font-semibold"
        >
          <span className="text-green-500 w-full text-center border-b-2 border-dashed p-2 border-gray-200">
            + Add Brand Guides
          </span>
          <input
            type="file"
            name="files"
            placeholder="Add Fonts"
            id="files"
            className="px-4 py-12 cursor-pointer rounded-md"
            onChange={(e) => {
              console.log(e.target.files[0].name, e.target.files[0].type);
            }}
            multiple
          />
          {/* <input type="file" className="hidden" />
            <input type="" className="hidden" /> */}
        </label>
      </fieldset>
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border border-gray-300 rounded-lg  py-2 px-8 shadow-md "
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-16 h-16 object-contain"
            loading="lazy"
          />
          <span className="text-sm font-medium mt-2">{logo.name}</span>
          <span className="text-xs text-gray-500">{logo.size}</span>
        </div>
      ))}
    </div>
  );
};

const FontUpload = () => {
  const [fonts, setFonts] = useState([
    {
      src: '/images/dashboard/dot-file.png',
      name: 'Font.zip',
      size: 6,
    },
  ]);

  return (
    <div className="flex flex-wrap gap-4">
      <fieldset className="w-fit space-y-1">
        <label
          htmlFor="files"
          className="gap-1 border-2 border-dashed h-full w-full border-gray-200 rounded  bg-gray-100 cursor-pointer flex flex-col justify-center items-center font-semibold"
        >
          <span className="text-green-500 w-full text-center border-b-2 border-dashed p-2 border-gray-200">
            + Add Fonts
          </span>
          <input
            type="file"
            name="files"
            placeholder="Add Fonts"
            id="files"
            className="px-4 py-12 cursor-pointer rounded-md"
            onChange={(e) => {
              // const filePath = URL.createObjectURL(e.target.files[0]);
              const filePath = '/images/dashboard/dot-file.png';
              const fileName = e.target.files[0].name;
              const fileSize = e.target.files[0].size;

              const filesData = {
                src: filePath,
                name: fileName,
                size: fileSize,
              };

              setFonts((oldFiles) => [filesData, ...oldFiles]);
            }}
            multiple
            accept=".zip, .ttf, .otf"
          />
          {/* <input type="file" className="hidden" />
            <input type="" className="hidden" /> */}
        </label>
      </fieldset>
      {fonts.map((logo, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center justify-center border border-gray-300 rounded-lg py-2 px-8 shadow-md w-40"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
          <span className="text-sm font-medium mt-2">{logo.name}</span>
          <span className="text-xs text-gray-500">
            {logo.size > 1024 * 1024
              ? (logo.size / (1024 * 1024)).toFixed(2) + ' MB'
              : (logo.size / 1024).toFixed(2) + ' KB'}
          </span>
        </div>
      ))}
    </div>
  );
};

// const ExtraAssets = () => {
//   const logos = [
//     {
//       src: '/images/dashboard/dot-file.png',
//       name: 'Font.zip',
//       size: '6 kB',
//     },
//   ];

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       <div className="flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-30 text-gray-500 cursor-pointer ">
//         + Add Font
//       </div>
//       {logos.map((logo, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center justify-center border border-gray-300 rounded-lg  py-2 px-8 shadow-md "
//         >
//           <img
//             src={logo.src}
//             alt={logo.name}
//             className="w-16 h-16 object-contain"
//             loading="lazy"
//           />
//           <span className="text-sm font-medium mt-2">{logo.name}</span>
//           <span className="text-xs text-gray-500">{logo.size}</span>
//         </div>
//       ))}
//     </div>
//   );
// };
