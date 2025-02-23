const PageHeader = ({
  pageTitle = 'Our Work',
  pagePara = 'Check out some of the latest creations we did for our customers',
  children,
}) => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="relative">
        <div
          className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
        >
          <h2
            className={`font-extrabold text-[1.85rem] text-center w-full mb-4 leading-8 lg:text-center min-[450px]:w-full md:text-[3rem] lg:w-full lg:leading-13`}
          >
            {pageTitle}
          </h2>
          <p className={`text-center text-xl px-2 w-full md:px-0 md:text-2xl `}>
            {pagePara}
          </p>
          {children ? (
            children
          ) : (
            <div className="flex absolute px-5 top-0 items-center justify-between z-10 w-full">
              <img
                src="./images/ourworkpage/yellow-squre.svg"
                alt="this is a yello element which is use to inchnge the design quality"
                loading="lazy"
                className="w-10 left-[10%] absolute -top-5 md:w-24"
              />
              <div className="absolue left-[25%] grid w-full">
                <img
                  src="./images/ourworkpage/ring.svg"
                  alt="this is a ring element which is use to inchnge the design quality"
                  loading="lazy"
                  className="hidden top-30 absolute  left-[20%] md:block md:top-35 md:left-[25%]"
                />
                <img
                  src="./images/ourworkpage/blue-squre.svg"
                  alt="this is a blue squre element which is use to inchnge the design quality"
                  loading="lazy"
                  className="hidden bottom-5 left-[35%] absolute md:block"
                />
              </div>

              <img
                src="./images/ourworkpage/tringle.svg"
                alt="this is a tringle element which is use to inchnge the design quality"
                loading="lazy"
                className="w-10 absolute top-5 right-[10%] md:right-[25%] md:w-8"
              />
              <img
                src="./images/ourworkpage/double-squre.svg"
                alt="this is a tringle element which is use to inchnge the design quality"
                loading="lazy"
                className="hidden absolute -bottom-30 right-[10%] md:block"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
