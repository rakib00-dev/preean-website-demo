import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';

const SecondTypeSection = ({
  smallTitle = 'how it work',
  bigTitle = 'Get your designs done in 1-2 days, not weeks',
  imgSrc = './images/FirstTypeImg/need-designer-soon.avif',
  style,
  children,
  btnChild,
  paraChildren,
  textContentAlign = 'center',
}) => {
  const workImgs = [];
  workImgs[0] = './images/SecondTypeImg/submit.svg';
  workImgs[1] = './images/SecondTypeImg/profile.svg';
  workImgs[2] = './images/SecondTypeImg/mail-open.svg';

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
      }}
      className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl md:mt-16 md:pt-10 bg-white overflow-hidden"
    >
      <div className="flex m-auto justify-center items-center flex-col w-full gap-4 ">
        {/* content */}

        {/* text conent */}
        <div
          className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
        >
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            {smallTitle}
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-${textContentAlign} md:w-[98%] lg:leading-13`}
            style={style}
          >
            {bigTitle}
          </h2>
          {paraChildren}
        </div>

        {/* card content */}
        {children ? (
          children
        ) : (
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
                  Give us your feedback. We will revise your designs as many
                  times as needed.
                </p>
              </div>
            </div>
          </div>
        )}
        {btnChild ? (
          btnChild
        ) : (
          <Link to="/contact" className="my-5">
            <Button text={'Get Started'} className={'text-white'} />
          </Link>
        )}
      </div>
    </motion.section>
  );
};

export default SecondTypeSection;
