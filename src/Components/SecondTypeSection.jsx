const SecondTypeSection = ({
  smallTitle = 'how it work',
  bigTitle = 'Get your designs done in 1-2 days, not weeks',
  imgSrc = './images/FirstTypeImg/need-designer-soon.avif',
  style,
  textContentAlign = 'center',
}) => {
  return (
    <section className="flex flex-col justify-center items-center m-auto w-full my-[4rem] mt-[7rem] bg-white overflow-hidden md:w-4/5">
      <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-4 ">
        {/* content */}

        {/* text conent */}
        <div
          className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
        >
          <h1
            className="uppercase font-bold text-[.85rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            {smallTitle}
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-${textContentAlign} min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
            style={style}
          >
            {bigTitle}
          </h2>
        </div>

        {/* card content */}
        <div className="flex justify-center items-center w-[95%] m-auto min-[425px]:w-[338.5px] md:w-[400px] lg:w-[500px]">
          <div className="bg-gray-400">
            <img src="" alt="" loading="lazy" />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondTypeSection;
