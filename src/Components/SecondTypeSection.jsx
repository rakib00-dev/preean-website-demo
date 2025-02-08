import Button from './Button';

const SecondTypeSection = ({
  smallTitle = 'how it work',
  bigTitle = 'Get your designs done in 1-2 days, not weeks',
  imgSrc = './images/FirstTypeImg/need-designer-soon.avif',
  style,
  textContentAlign = 'center',
}) => {
  const workImgs = [];
  workImgs[0] = './images/SecondTypeImg/submit.svg';
  workImgs[1] = './images/SecondTypeImg/profile.svg';
  workImgs[2] = './images/SecondTypeImg/mail-open.svg';

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
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-${textContentAlign} min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
            style={style}
          >
            {bigTitle}
          </h2>
        </div>

        {/* card content */}
        <div className=" justify-center items-center w-11/12 mx-auto md:flex gap-5">
          <div className="flex justify-center items-center w-full flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg">
            <img
              src={workImgs[0]}
              alt={workImgs[0]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">Submit your request</h3>
              <p className="text-md ">
                Let us know what you need. Share references and upload your
                brand assets.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 p-4 py-6 text-center w-full mb-5 rounded-lg">
            <img
              src={workImgs[1]}
              alt={workImgs[1]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">
                Your designers gets to work
              </h3>
              <p className="text-md ">
                Get instantly matched with the best designers for the job.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col bg-gray-100 p-4 py-6 text-center w-full mb-5 rounded-lg">
            <img
              src={workImgs[2]}
              alt={workImgs[2]}
              loading="lazy"
              className="w-24"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold ">Receive your design</h3>
              <p className="text-md ">
                Give us your feedback. We will revise your designs as many times
                as needed.
              </p>
            </div>
          </div>
        </div>
        <Button text={'Get Started'} className={'text-white'} />
      </div>
    </section>
  );
};

export default SecondTypeSection;
