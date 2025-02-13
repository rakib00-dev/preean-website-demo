import CountUp from 'react-countup';

const Carousel = () => {
  const images = [];
  images[1] = '../images/carousel/alone-bird.svg';
  images[2] = '../images/carousel/buffer.svg';
  images[3] = '../images/carousel/carousel.svg';
  images[4] = '../images/carousel/decathlon.svg';
  images[5] = '../images/carousel/dynamite-jobs.svg';
  images[6] = '../images/carousel/eiv.svg';
  images[7] = '../images/carousel/sleek.svg';
  images[8] = '../images/carousel/tech-able.svg';

  return (
    <section
      className={`mx-auto w-full max-w-7xl my-16 items-center bg-white overflow-hidden`}
    >
      <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-8">
        {/* counter */}
        <div className="grid place-items-center ">
          {/* counter 1 */}
          <h5 className="text-md flex justify-center items-center">
            Trusted by more than{' '}
            <span className="px-1">
              <CountUp
                start={135030}
                end={150000}
                duration={8}
                className="text-sm font-bold"
              />
            </span>{' '}
            of the world’s leading organizations
          </h5>
          {/* <div className="flex flex-col justify-center items-center">
            <div
              className="mb-4 py-4 text-blue-500"
              style={{
                color: '',
                borderBottom: '.25rem solid blue/50',
              }}
            >
              <CountUp
                start={135030}
                end={150000}
                duration={8}
                className="text-4xl font-bold md:text-[3.5rem] "
              />
              <span
                className="text-4xl font-extrabold text-blue-500"
                style={{
                  color: '',
                  fontFamily: 'sans-serif',
                }}
              >
                +
              </span>
            </div>
            <span className="text-xl md:text-md">Designs Completed</span>
          </div> */}

          {/* counter 2 */}
          {/* <div className="flex flex-col justify-center items-center">
            <div
              className="mb-4 py-4 text-blue-500"
              style={{
                color: '',
                borderBottom: '.25rem solid blue',
              }}
            >
              <CountUp
                start={2397}
                end={3000}
                duration={10}
                className="text-4xl font-bold md:text-[3.5rem]"
              />
              <span
                className="text-4xl font-extrabold text-blue-500"
                style={{
                  color: '',
                  fontFamily: 'sans-serif',
                }}
              >
                +
              </span>
            </div>
            <span className="text-xl md:text-md">Customers Served</span>
          </div> */}
        </div>

        {/* carousel */}
        <div
          className="flex gap-4 mb-20  py-6 rounded-2xl overflow-hidden boxShadow md:mt-5"
          // style={{
          //   boxShadow:
          //     'inset 12px 0 15px -4px gray, inset -12px 0 8px -4px gray, 10px 10px 45px 5px rgba(0,0,0,0.10)',
          // }}
        >
          <div className="inline-block">
            {/* slide 1 */}
            <div className="inline-block slider">
              <div className=" gap-40 mr-40 slide">
                {images.map((e, i) => (
                  <span key={i} className="inline">
                    <img
                      src={e}
                      alt={e}
                      className="w-[7rem] inline"
                      loading="lazy"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
