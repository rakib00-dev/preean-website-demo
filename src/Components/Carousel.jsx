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
      className={`m-auto w-full mt-[4rem] items-center bg-white overflow-hidden`}
    >
      <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-8 md:flex-row">
        {/* counter */}
        <div className="">
          {/* counter 1 */}
          <div className="flex pt-10 flex-col justify-center items-center">
            <div
              className="mb-4 py-4"
              style={{
                color: 'var(--colors-pink)',
                borderBottom: '.25rem solid #ef457e33',
              }}
            >
              <CountUp
                start={135030}
                end={150000}
                duration={48}
                className="text-4xl font-bold "
              />
              <span
                className="text-4xl font-extrabold md:text-6xl"
                style={{ color: 'var(--colors-pink)' }}
              >
                +
              </span>
            </div>
            <span className="text-xl">Designs Completed</span>
          </div>

          {/* counter 2 */}
          <div className="flex pb-10 flex-col justify-center items-center">
            <div
              className="mb-4 py-4"
              style={{
                color: 'var(--colors-pink)',
                borderBottom: '.25rem solid #ef457e33',
              }}
            >
              <CountUp
                start={1897}
                end={3000}
                duration={48}
                className="text-4xl font-bold "
              />
              <span
                className="text-4xl font-extrabold md:text-6xl"
                style={{ color: 'var(--colors-pink)' }}
              >
                +
              </span>
            </div>
            <span className="text-xl">Customers Served</span>
          </div>
        </div>
        {/* carousel */}
        <div className="flex gap-4 overflow-hidden ">
          <div className="inline-block slider">
            {/* slide 1 */}
            <div className="inline-block slider">
              <div className="slide">
                {images.map((e, i) => (
                  <span key={i} className="">
                    <img src={e} alt={e} className="w-[7rem] inline" />
                  </span>
                ))}
              </div>
              <div className="slide">
                {images.map((e, i) => (
                  <span key={i} className="">
                    <img src={e} alt={e} className="w-[7rem] inline" />
                  </span>
                ))}
              </div>
            </div>
            {/* slide 2 */}
            <div className="slider">
              <div className="slide2">
                {images.map((e, i) => (
                  <span key={i} className="">
                    <img src={e} alt={e} className="w-[7rem] inline" />
                  </span>
                ))}
              </div>
              <div className="slide2">
                {images.map((e, i) => (
                  <span key={i} className="">
                    <img src={e} alt={e} className="w-[7rem] inline" />
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
