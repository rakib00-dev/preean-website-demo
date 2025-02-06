import Button from './Button';

const Hero = () => {
  return (
    <>
      <header
        className={`flex justify-center m-auto w-full items-center bg-white`}
      >
        <div className="w-[95%] p-0 md:w-4/5 md:p-4">
          {/* video */}
          <div>
            <img src="./images/hero/header-video-bg.svg" alt="header bg" />
          </div>

          {/* content */}
          <div className="leading-14">
            <h1 className="text-6xl font-bold w-4/5">
              On-Demand Graphic & Web Design
            </h1>
            <p className="text-lg">
              Get access to our creative team in a few clicks. Simple, fast, and
              affordable.
            </p>
            <a href="#">
              <Button
                text={'pick your plan'}
                px="30"
                py="15"
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
