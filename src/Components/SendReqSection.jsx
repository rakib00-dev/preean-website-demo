import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';
import DumbbellShape from './DumbbellShape';
import TriangleShape from './TriangleShape';

const SendReqSection = ({ title, button }) => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
      }}
      className="mx-auto my-15 w-full max-w-7xl"
    >
      <div className="relative mx-5 md:mx-0 overflow-hidden">
        <div className="top-10 -right-30 absolute z-10 hidden md:block">
          <TriangleShape
            className={
              'absolute top-0 right-0 w-[26rem] opacity-100 SendRedTriangleShapeAnima rotate-90 '
            }
          />
          <DumbbellShape
            className={
              'absolute top-0 right-0 w-[20rem] opacity-80 rotate-90 SendRedDumbbellShapeAnima '
            }
          />
        </div>
        <div className="w-full relative text-center py-4 md:py-6 rounded-md flex-col gap-10 leading-10 bg-[#f0f3f8] h-auto justify-center items-center md:flex ">
          {title ? (
            title
          ) : (
            <h1
              className="text-2xl px-2 md:px-8 mt-15 mb-4 font-extrabold md:text-4xl xl:text-6xl"
              style={{ color: 'black' }}
            >
              {' '}
              Send your request today. <br />
              Get your design tomorrow.
            </h1>
          )}
          {button ? (
            button
          ) : (
            <div className="flex items-center flex-col mb-15 gap-5 md:mb-0 md:flex-row">
              <Link
                to="/contact"
                className={
                  'transition-all duration-300 font-bold bg-blue-500 px-4 py-[1px] rounded text-white hover:bg-white hover:text-black hover:shadow-lg '
                }
              >
                Get Started
              </Link>
              <Link to="/book-a-call">
                <Button
                  text={'Book A Call'}
                  className={
                    'transition-all duration-300 border-gray-700 border-2 hover:border-blue-500 hover:text-blue-500 hover:shadow-lg'
                  }
                  bg="transparent"
                />
              </Link>
            </div>
          )}

          {/* <div className="bg-pink-500 rounded-bl-lg rounded-br-lg w-15 h-10 absolute inset-[0%_6.375rem_auto_auto] right-5 z-12 md:w-20 md:h-16 md:right-10"></div> */}
          {/* <div className="bg-[#0a32c3] rounded-tl-lg rounded-tr-lg w-15 h-10 absolute bottom-0 left-5 z-12 md:w-20 md:h-16 md:left-10"></div> */}
        </div>
        <div className="top-10 -left-30 absolute hidden md:block">
          <TriangleShape
            className={
              'absolute top-0 w-[26rem] opacity-100 SendRedTriangleShapeAnima rotate-270 hidden md:block'
            }
          />
          <DumbbellShape
            className={
              'absolute top-0 w-[20rem] opacity-80 SendRedDumbbellShapeAnima hidden md:block'
            }
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SendReqSection;
