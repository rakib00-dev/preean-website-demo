const PageHeader = () => {
  return (
    <section>
      <div className="">
        <div
          className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
        >
          <h2
            className={`font-extrabold text-[1.85rem] text-center w-full mb-4 leading-8 lg:text-center min-[450px]:w-full md:text-[3rem] lg:w-full lg:leading-13`}
          >
            Our Work
          </h2>
          <p
            className={`text-center text-md px-13 md:w-[26rem] md:px-0 md:text-lg `}
          >
            Don’t take our word for it - see what some of our happy customers
            think about the service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
