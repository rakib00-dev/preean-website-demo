import Button from './Button';

const OurTools = () => {
  return (
    <section className="mx-auto my-15 w-full max-w-7xl">
      <div className="mx-5">
        <div className="w-full relative text-center py-6 px-10 rounded-md flex-col gap-2 leading-5 bg-gray-100 h-auto justify-center items-center md:flex md:rounded-xl xl:rounded-2xl">
          <div
            className={`flex flex-col justify-start gap-2 items-start md:gap-4 md:items-start md:my-8`}
          >
            <h1
              className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
              style={{ color: 'var(--colors-pink)' }}
            >
              our tools
            </h1>
            <h2
              className={`font-extrabold text-[1.55rem] text-start w-full mb-4 leading-8 lg:text-start md:text-[2.1rem] lg:text-[2.5rem] lg:leading-13`}
            >
              Serving businesses of every size <br />
              with digital and print designs
            </h2>
          </div>
          <div className="flex flex-col mb-15 gap-5 md:mb-0 md:flex-row"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTools;
