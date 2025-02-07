import Button from './Button';

const Hero = () => {
  return (
    <>
      <header className={`m-auto w-full items-center bg-white`}>
        <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-8 md:flex-row">
          {/* video */}
          <div className="m-auto top-0 w-[98%] min-[420px]:w-[404px] md:w-[40%]">
            <div className="relative m-auto mt-4 h-auto w-full">
              <img
                src="./images/hero/header-video-bg.svg"
                alt="header bg"
                className="hidden absolute justify-center items-center left-0 top-0 w-full hue-rotate-383 lg:flex"
              />
              <div className="relative m-auto flex flex-col justify-center items-center w-full lg:scale-80">
                <img
                  src="./images/hero/header-video-cover.avif"
                  alt="header bg cover"
                  className="flex justify-center items-center rounded-xl relative shadow-xl top-0 w-full"
                />
                <img
                  src="./images/hero/play.png"
                  alt="play"
                  className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-15 h-15 "
                />
                <div className=" flex justify-center items-center place-items-center rounded-xl absolute shadow-xl w-15 h-15 playWave" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="leading-14 w-full mt-4 md:w-1/2">
            <h1 className="text-3xl text-center font-bold w-full md:text-[2.5rem] md:text-start">
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
