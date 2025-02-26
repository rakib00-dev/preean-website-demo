import React, { useEffect, useState } from 'react';
import { Progress } from '@material-tailwind/react';
import { motion } from 'framer-motion';

const AutoChangeContent = ({
  changeAlignment = 'grid-cols-2',
  // changeAlignment = 'md:flex md:flex-row-reverse md:gap-10',
}) => {
  const imagesArr = [
    { src: './images/autochange/add-your-availability.png' },
    { src: './images/autochange/connect-conferencing-tools.png' },
    { src: './images/autochange/connect-your-calendars.png' },
    { src: './images/autochange/customize-event-types.png' },
    { src: './images/autochange/share-scheduling-link.png' },
  ];

  const [images, setImages] = useState(imagesArr.slice(0, 1));
  const [progress, setProgress] = useState(0);

  const [isFirstActive, setIsFirstActive] = useState(true);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const [isFourthActive, setIsFourthActive] = useState(false);
  const [isFifthActive, setIsFifthActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return (prev += 1);
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted

    const intervalId = setInterval(() => {
      if (!isMounted) return; // Skip state updates if component is unmounted

      setTimeout(() => {
        if (isMounted) {
          setIsFirstActive(true);
          setIsSecondActive(false);
          setIsThirdActive(false);
          setIsFourthActive(false);
          setIsFifthActive(false);
          setImages(imagesArr.slice(0, 1));
        }
      }, 5000);

      setTimeout(() => {
        if (isMounted) {
          setIsFirstActive(false);
          setIsSecondActive(true);
          setIsThirdActive(false);
          setIsFourthActive(false);
          setIsFifthActive(false);
          setImages(imagesArr.slice(1, 2));
        }
      }, 10000);

      setTimeout(() => {
        if (isMounted) {
          setIsFirstActive(false);
          setIsSecondActive(false);
          setIsThirdActive(true);
          setIsFourthActive(false);
          setIsFifthActive(false);
          setImages(imagesArr.slice(2, 3));
        }
      }, 10000);

      setTimeout(() => {
        if (isMounted) {
          setIsFirstActive(false);
          setIsSecondActive(false);
          setIsThirdActive(false);
          setIsFourthActive(true);
          setIsFifthActive(false);
          setImages(imagesArr.slice(3, 4));
        }
      }, 15000);

      setTimeout(() => {
        if (isMounted) {
          setIsFirstActive(false);
          setIsSecondActive(false);
          setIsThirdActive(false);
          setIsFourthActive(false);
          setIsFifthActive(true);
          setImages(imagesArr.slice(4, 5));
        }
      }, 20000);
    }, 17500);

    // Cleanup the interval when the component unmounts
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  function ProgressColors({ color = 'blue' }) {
    return (
      <>
        <Progress
          value={progress}
          color={color}
          className="bottom-0 bg-gray-100"
        />
      </>
    );
  }

  const ChangingCards = () => {
    return (
      <>
        <div className="w-full transition-all top-0">
          <div
            className={`transition-all relative border-b border-gray-300/60 py-6 grid gap-5 duration-300 w-11/12 cursor-pointer overflow-hidden autoChangeContentClass

              ${isFirstActive ? 'autoChangeActive' : 'autoChangeHidden'}
            `}
            onClick={() => {
              setIsFirstActive(true);
              setIsSecondActive(false);
              setIsThirdActive(false);
              setIsFourthActive(false);
              setIsFifthActive(false);
              setImages(imagesArr.slice(0, 1));
            }}
          >
            <h2
              className={`transition-all duration-200 flex justify-start items-center gap-4 md:text-2xl font-bold text-gray-800
                ${
                  isFirstActive
                    ? `md:text-2xl  text-gray-800`
                    : `md:text-xl  text-gray-400`
                }
              `}
              style={{
                color: `${isFirstActive ? `#0b3558` : `#a6bbd1`}`,
                opacity: `${isFirstActive ? `` : `0.4`}`,
              }}
            >
              <img
                src="./images/autochange/cube.png"
                alt=""
                loading="lazy"
                className={
                  isFirstActive
                    ? `w-12  saturate-100`
                    : `w-8 -brightness-50 saturate-0`
                }
              />
              Connect your calendars
            </h2>
            <p className="w-full md:w-4/5">
              DesignPro connects up to six calendars to automate scheduling with
              real-time availability.
            </p>
            <ProgressColors />
          </div>
          <div
            className={`transition-all border-b border-gray-300/60 py-6 grid gap-5 duration-300 w-11/12 cursor-pointer overflow-hidden  autoChangeContentClass

              ${isSecondActive ? 'autoChangeActive' : 'autoChangeHidden'}
            `}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(true);
              setIsThirdActive(false);
              setIsFourthActive(false);
              setIsFifthActive(false);
              setImages(imagesArr.slice(1, 2));
            }}
          >
            <h2
              className={`transition-all duration-200 flex justify-start items-center gap-4 md:text-2xl font-bold text-gray-800
                ${
                  isSecondActive
                    ? `md:text-2xl  text-gray-800`
                    : `md:text-xl  text-gray-400`
                }
              `}
              style={{
                color: `${isSecondActive ? `#0b3558` : `#a6bbd1`}`,
                opacity: `${isSecondActive ? `` : `0.4`}`,
              }}
            >
              <img
                src="./images/autochange/trees.png"
                alt=""
                loading="lazy"
                className={
                  isSecondActive
                    ? `w-12  saturate-100`
                    : `w-8 -brightness-50 saturate-0`
                }
              />
              Add your availability
            </h2>
            <p className="w-full md:w-4/5">
              Keep invitees informed of your availability. Take control of your
              calendar with detailed availability settings, scheduling rules,
              buffers, and more.
            </p>
            <ProgressColors color="green" />
          </div>
          <div
            className={`transition-all border-b border-gray-300/60 py-6 grid gap-5 duration-300 w-11/12 cursor-pointer overflow-hidden  autoChangeContentClass

              ${isThirdActive ? 'autoChangeActive' : 'autoChangeHidden'}
            `}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(false);
              setIsThirdActive(true);
              setIsFourthActive(false);
              setIsFifthActive(false);
              setImages(imagesArr.slice(2, 3));
            }}
          >
            <h2
              className={`transition-all duration-200 flex justify-start items-center gap-4 md:text-2xl font-bold text-gray-800
                ${
                  isThirdActive
                    ? `md:text-2xl  text-gray-800`
                    : `md:text-xl  text-gray-400`
                }
              `}
              style={{
                color: `${isThirdActive ? `#0b3558` : `#a6bbd1`}`,
                opacity: `${isThirdActive ? `` : `0.4`}`,
              }}
            >
              <img
                src="./images/autochange/triangle.png"
                alt=""
                loading="lazy"
                className={
                  isThirdActive
                    ? `w-12  saturate-100`
                    : `w-8 -brightness-50 saturate-0`
                }
              />
              Connect conferencing tools
            </h2>
            <p className="w-full md:w-4/5">
              Sync your video conferencing tools and set preferences for
              in-person meetings or calls.
            </p>
            <ProgressColors color="pink" />
          </div>
          <div
            className={`transition-all border-b border-gray-300/60 py-6 grid gap-5 duration-300 w-11/12 cursor-pointer overflow-hidden  autoChangeContentClass

              ${isFourthActive ? 'autoChangeActive' : 'autoChangeHidden'}
            `}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(false);
              setIsThirdActive(false);
              setIsFourthActive(true);
              setIsFifthActive(false);
              setImages(imagesArr.slice(3, 4));
            }}
          >
            <h2
              className={`transition-all duration-200 flex justify-start items-center gap-4 md:text-2xl font-bold text-gray-800
                ${
                  isFourthActive
                    ? `md:text-2xl  text-gray-800`
                    : `md:text-xl  text-gray-400`
                }
              `}
              style={{
                color: `${isFourthActive ? `#0b3558` : `#a6bbd1`}`,
                opacity: `${isFourthActive ? `` : `0.4`}`,
              }}
            >
              <img
                src="./images/autochange/wave.png"
                alt=""
                loading="lazy"
                className={
                  isFourthActive
                    ? `w-12  saturate-100`
                    : `w-8 -brightness-50 saturate-0`
                }
              />
              Customize your event type
            </h2>
            <p className="w-full md:w-4/5">
              Choose from pre-built templates or quickly create custom event
              types for any meeting you need to schedule.
            </p>
            <ProgressColors color="purple" />
          </div>
          <div
            className={`transition-all border-b border-gray-300/60 py-6 grid gap-5 duration-300 w-11/12 cursor-pointer overflow-hidden  autoChangeContentClass

              ${isFifthActive ? 'autoChangeActive' : 'autoChangeHidden'}
            `}
            onClick={() => {
              setIsFirstActive(false);
              setIsSecondActive(false);
              setIsThirdActive(false);
              setIsFourthActive(false);
              setIsFifthActive(true);
              setImages(imagesArr.slice(4, 5));
            }}
          >
            <h2
              className={`transition-all duration-200 flex justify-start items-center gap-4 md:text-2xl font-bold text-gray-800
                ${
                  isFifthActive
                    ? `md:text-2xl  text-gray-800`
                    : `md:text-xl  text-gray-400`
                }
              `}
              style={{
                color: `${isFifthActive ? `#0b3558` : `#a6bbd1`}`,
                opacity: `${isFifthActive ? `` : `0.4`}`,
              }}
            >
              <img
                src="./images/autochange/send.png"
                alt=""
                loading="lazy"
                className={
                  isFifthActive
                    ? `w-12  saturate-100`
                    : `w-8 -brightness-50 saturate-0`
                }
              />
              Share your scheduling link
            </h2>
            <p className="w-full md:w-4/5">
              Easily book meetings by embedding scheduling links on your
              website, landing pages, or emails.
            </p>
            <ProgressColors color="purple" />
          </div>
        </div>
        <div className="py-8 px-4 mt-10 md:mt-0 md:h-[38rem] bg-gray-100 w-full rounded-2xl">
          {images.map((e, i) => (
            <img src={e.src} alt="" loading="lazy" key={i} />
          ))}
        </div>
      </>
    );
  };

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
      }}
      className="mx-auto w-full max-w-7xl my-20"
    >
      <div className="mx-3 md:mx-0">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8 md:mx-10`}
        >
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            watch our contents
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-full mb-4 leading-8 lg:text-start md:text-6xl md:w-4/5 md:leading-16`}
          >
            DesignPro makes your work simple
          </h2>
          <p className="">
            DesignPro’s easy enough for individual users, and powerful enough to
            meet the needs of enterprise organizations — including 86% of the
            Fortune 500 companies.
          </p>
        </div>

        {/* cards */}
        <div
          className={`grid place-items-center md:mx-10 md:${changeAlignment}`}
        >
          <ChangingCards />
        </div>
      </div>
    </motion.section>
  );
};

export default AutoChangeContent;
