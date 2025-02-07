import Button from './Button';

const Hero = () => {
  return (
    <>
      <header
        className={`flex justify-center  m-auto w-full items-center bg-white`}
      >
        <div className="flex flex-col w-[95%] gap-8 p-0 md:w-4/5 md:p-4 md:flex-row">
          {/* video */}
          <div className="">
            <div className=" relative mt-4 h-auto float-start w-full">
              <img
                src="./images/hero/header-video-bg.svg"
                alt="header bg"
                className="flex justify-center items-center left-0 top-0 w-80 hue-rotate-0 md:w-[50rem]"
              />
              <img
                src="./images/hero/header-video-cover.avif"
                alt="header bg cover"
                className="flex justify-center items-center rounded-xl absolute right-10 shadow-xl top-0 w-80 scale-90 md:w-[28rem]"
              />
            </div>
          </div>

          {/* content */}
          <div className="leading-14 float-end w-full mt-4 md:w-4/5">
            <h1 className="text-3xl text-center font-bold w-full md:w-4/5 md:text-6xl md:text-start">
              On-Demand Graphic & Web Design
            </h1>
            <p className="text-xl text-center py-4 md:text-start">
              Get access to our creative team in a few clicks. Simple, fast, and
              affordable.
            </p>
            <a href="#" className="flex justify-center md:justify-start">
              <Button
                text={'pick your plan'}
                px="30"
                py="0"
                className={'text-white uppercase '}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
