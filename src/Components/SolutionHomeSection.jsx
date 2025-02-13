const SolutionHomeSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl my-20">
      <div className="mx-3 md:mx-16">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            our solutions
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-start min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
          >
            Check Out Our Solutions That We Provide
          </h2>
        </div>

        <div className="grid grid-rows-1 md:grid-cols-3 gap-4"></div>
      </div>
    </section>
  );
};

export default SolutionHomeSection;
