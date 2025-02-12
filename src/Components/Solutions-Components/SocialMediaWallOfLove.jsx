const SocialMediaWallOfLove = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="grid place-items-center place-content-start mx-20 w-full">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            wall of love
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-start min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
          >
            Thousands of happy customers
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWallOfLove;
