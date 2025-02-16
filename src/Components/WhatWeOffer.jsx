const WhatWeOffer = ({
  smallTitle = 'What we offer',
  bigTitle = 'A design solution you will love',
  style,
  textContentAlign = 'center',
}) => {
  const workImgs = [];
  workImgs[0] = './images/whatWeOffer/time.svg';
  workImgs[1] = './images/whatWeOffer/fixed-price.svg';
  workImgs[2] = './images/whatWeOffer/pro-designer.svg';
  workImgs[3] = './images/whatWeOffer/flexible.svg';

  return (
    <section className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl md:mt-16 md:pt-10 bg-white overflow-hidden ">
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
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-${textContentAlign} min-[450px]:w-full lg:w-full lg:leading-13`}
            style={style}
          >
            {bigTitle}
          </h2>
        </div>

        {/* card content */}
        <div className=" justify-center items-stretch w-11/12 mx-auto md:flex gap-5">
          <div className="flex justify-center items-center w-full flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg gap-2 md:flex-row">
            <img
              src={workImgs[0]}
              alt={workImgs[0]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">Fast & Reliable</h3>
              <p className="text-md ">
                Get your design back in 1-2 business days.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 p-4 py-6 text-center w-full mb-5 rounded-lg gap-2 md:flex-row">
            <img
              src={workImgs[1]}
              alt={workImgs[1]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">Fixed Monthly Rate</h3>
              <p className="text-md ">
                Unlimited requests & revisions, same price.{' '}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 p-4 py-6 text-center w-full mb-5 rounded-lg gap-2 md:flex-row">
            <img
              src={workImgs[2]}
              alt={workImgs[2]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">
                Professional Designers
              </h3>
              <p className="text-md ">
                Work with battle-tested professionals only.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 p-4 py-6 text-center w-full mb-5 rounded-lg gap-2 md:flex-row">
            <img
              src={workImgs[3]}
              alt={workImgs[3]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">Flexible & Scalable</h3>
              <p className="text-md ">
                No contracts. Scale up or down as you go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
