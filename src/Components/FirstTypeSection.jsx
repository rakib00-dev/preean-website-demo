const FirstTypeSection = ({
  smallTitle,
  bigTitle,
  para,
  imgSrc,
  contentClass,
}) => {
  return (
    <section className="flex flex-col justify-center items-center m-auto w-full my-[4rem] bg-white overflow-hidden md:w-4/5">
      <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-4 md:flex-row">
        <h1
          className="uppercase font-bold text-[.85rem] md:hidden"
          style={{ color: 'var(--colors-pink)' }}
        >
          {smallTitle}
        </h1>
        {/* content */}
        <div
          className={`flex flex-col justify-center items-center w-full m-auto gap-7  lg:flex-row ${contentClass}`}
        >
          {/* text conent */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:gap-2">
            <h1
              className="hidden uppercase  font-bold text-[.85rem] md:block lg:text-[1rem]"
              style={{ color: 'var(--colors-pink)' }}
            >
              {smallTitle}
            </h1>
            <h2 className="font-extrabold text-[1.4rem] text-center w-4/5 mb-4 leading-8 lg:text-start min-[450px]:w-full md:text-[2.1rem] lg:w-[95%] lg:text-[2.5rem] lg:leading-13">
              {bigTitle}
            </h2>
            <p className="text-center text-sm px-13 w-[24.6rem] md:w-[26rem] md:px-0 md:text-lg lg:text-start lg:text-2xl">
              {para}
            </p>
          </div>

          {/* img content */}
          <div className="flex justify-center items-center w-full m-auto min-[425px]:w-[338.5px] md:w-[400px] lg:w-[500px]">
            <img src={imgSrc} alt="need-designer-soon" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstTypeSection;
