import CountUp from 'react-countup';

const Carousel = () => {
  return (
    <section className={`m-auto w-full mt-[4rem] items-center bg-white `}>
      <div className="flex m-auto justify-center items-center flex-col w-[95%] gap-8 md:flex-row">
        {/* counter */}
        <div className="holi">
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
        <div className=""></div>
      </div>
    </section>
  );
};

export default Carousel;
