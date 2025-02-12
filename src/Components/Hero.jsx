import { Link } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  return (
    <>
      <header
        className={`md:mx-auto w-full my-6 mx-4 overflow-hidden md:my-20 pb-20 max-w-7xl items-center bg-white `}
      >
        <div className="flex mx-2 flex-col-reverse top-0 justify-center items-center md:flex-row-reverse md:mx-19">
          {/* imges */}
          <div className="mx-auto grid place-items-center top-0 mt-44 mb-50 w-full cursor-pointer md:mt-20 md:mb-20 md:w-4/5">
            <div className="relative m-auto mt-4 h-auto w-full">
              {/* <img
                src="./images/hero/header-video-bg.svg"
                alt="header bg"
                className="hidden absolute justify-center items-center left-0 top-0 w-full hue-rotate-383 lg:flex"
                loading="lazy"
              /> */}
              <div className="relative m-auto shadow-[10px_10px_45px_5px_rgba(0,0,0,0.25)] rounded-2xl flex flex-col justify-center items-center w-full lg:scale-80">
                <div className="px-6 pb-6 pt-2 grid gap-5 bg-white rounded-xl border-gray-200 border-2 shadow-2xl absolute cardOne">
                  <h1 className="md:text-2xl font-bold bg-gray-100 p-4 rounded-2xl ">
                    Reduce no-shows and stay on track
                  </h1>
                  <img
                    src="./images/hero/send-reminder.webp"
                    alt="header bg cover"
                    className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                    loading="lazy"
                  />
                </div>

                <div className="px-6 pb-6 pt-2 grid gap-5 bg-white rounded-xl border-gray-200 border-2 shadow-2xl absolute cardTwo ">
                  <h1 className="md:text-2xl font-bold bg-gray-100 p-4 rounded-2xl ">
                    Share your booking page
                  </h1>
                  <img
                    src="./images/hero/send-book.webp"
                    alt="header bg cover"
                    className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                    loading="lazy"
                  />
                </div>
                {/* <img
                  src="./images/hero/play.png"
                  alt="play"
                  className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-15 h-15 "
                  loading="lazy"
                />
                <div className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-15 h-15 playWave" /> */}
              </div>
            </div>
          </div>

          {/* content */}
          <div className="leading-14 w-full mt-4 md:w-[40%]">
            <h1 className="text-3xl text-center text-gray-600 font-[900] w-full md:text-[3rem] md:text-start">
              On-Demand Graphic & Web Design
            </h1>
            <p className="text-xl text-center py-4 md:text-start lg:text-2xl md:w-4/5">
              Get access to our creative team in a few clicks. Simple, fast, and
              affordable.
            </p>
            <Link
              to="/pricing"
              className="flex justify-center md:justify-start"
            >
              <Button
                text={'pick your plan'}
                px="30"
                py="0"
                className={'text-white uppercase '}
              />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
