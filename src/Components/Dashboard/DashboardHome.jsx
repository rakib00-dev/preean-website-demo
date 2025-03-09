import { useEffect, useState } from 'react';
import { GoHome, GoPlus } from 'react-icons/go';
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';
import { Link, useOutletContext } from 'react-router-dom';
import gif from '../../../public/spinner-animation.json';
import Lottie from 'react-lottie';
import { GiUpgrade } from 'react-icons/gi';

const DashboardHome = () => {
  let myDate = new Date();
  let hrs = myDate.getHours();
  let reciveReqQueues = useOutletContext();
  reciveReqQueues = reciveReqQueues.filter(
    (list) => list.status !== 'Delivered'
  );

  const [greet, setGreet] = useState(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (hrs < 12) {
      setGreet('Good Morning');
      setSrc('/images/dashboard/good-morning.png');
    } else if (hrs >= 12 && hrs <= 17) {
      setGreet('Good Afternoon');
      setSrc('/images/dashboard/good-afternoon.png');
    } else if (hrs >= 17 && hrs <= 24) {
      setGreet('Good Evening');
      setSrc('/images/dashboard/good-night.png');
    }
  }, []);

  const cssStyle = {
    blur: {
      position: 'absolute',
      height: '100%',
      left: 0,
      width: '100%',
      background: '#ffffff42',
      filter: 'blur(42px)',
      zIndex: '-1',
      backdropFilter: 'blur(2px)',
    },
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gif,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="flex items-center gap-2 text-4xl">
            <GoHome />
            Dashboard
          </h1>
          <div className="flex items-center gap-2"></div>
        </div>
        <div className="my-12 flex gap-5">
          <div className="flex gap-5 items-center bg-gray-200/30 rounded-3xl shadow-xl w-fit p-6">
            <div className="font-bold">
              {greet}, <br /> User Name
            </div>
            <img src={src} alt="" loading="lazy" className="w-10" />
          </div>
          <div className="flex gap-15 items-center bg-gray-200/30 rounded-3xl shadow-xl w-fit p-6">
            <div className="font-bold">
              In Queue <br />{' '}
              <span className="text-green-500">
                {reciveReqQueues.length}{' '}
                {reciveReqQueues.length < 2 ? 'Request' : 'Requests'}
              </span>
            </div>
            <div className="w-10 h-10">
              <Lottie options={defaultOptions}></Lottie>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 items-center w-fit">
          <div className="p-6 grid bg-gray-200/30 rounded-3xl shadow-xl">
            <h3 className="text-2xl">
              Send <span className="text-green-500">Free 2</span> request to our
              design for your brand
            </h3>
            <div className="w-full flex justify-end">
              <Link
                to={'/dashboard/req'}
                className="bg-green-500  transition-all duration-300 text-white w-fit px-2 py-1.5 rounded hover:text-green-500 hover:bg-white font-bold shadow-lg"
              >
                Go to Request
              </Link>
            </div>
          </div>
          <div className="p-6 grid h-36 bg-gray-200/30 rounded-3xl shadow-xl relative overflow-hidden  ">
            <h3 className="text-2xl">
              For access full features{' '}
              <span className="text-[#10bc01]">Upgrade your plan</span>
            </h3>
            <div className="flex justify-end">
              <button className="flex gap-2 items-center transition-all  duration-300 text-sm font-bold text-white uppercase py-2 px-3 bg-gradient-to-r rounded from-[#38ffa5d2] via-[#04fd57d9] to-[#2adb3fca] hover:from-[#2adb3fca] hover:to-[#38ffa5d2] cursor-pointer shadow-lg">
                <GiUpgrade />
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
