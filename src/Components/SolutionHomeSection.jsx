import { Link } from 'react-router-dom';
import { SoluImgList } from '../importItems/solutionsImgList';
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SolutionHomeSection = () => {
  const imgList = [...SoluImgList];

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
      }}
      className="mx-auto w-full max-w-7xl mb-20 overflow-hidden"
    >
      <div className="mx-3 md:ms">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            type: 'spring',
          }}
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:mb-8 md:mx-12`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            our solutions & resources
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-full mb-4 leading-8 md:text-6xl md:text-start md:w-4/5 lg:leading-13`}
          >
            Calendly makes scheduling simple
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            type: 'spring',
          }}
          className="flex flex-wrap justify-center items-start gap-4 md:mx-12 md:justify-start"
        >
          {imgList.map((e, i) => (
            <ImagesAndLinks alt={e.alt} src={e.src} to={e.to} key={i} />
          ))}
        </motion.div>

        <div className="grid my-7 justify-center mt-10 items-start md:gap-4 md:mx-12 md:grid-cols-2 md:mt-4">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              type: 'spring',
            }}
            className="p-4 grid gap-2 border border-gray-200 shadow-xl md:my-4 rounded-xl"
          >
            <h2 className="font-bold flex justify-between text-lg">
              CEO, Founder
              {/* Mr. Preean */}
              <FaQuoteRight className="mr-3 mt-1 text-gray-500" />
            </h2>

            <p className="text-gray-500">
              Check out our solutions and contact us if you want to know more
              about us. Explore our innovative solutions and reach out to us for
              more information or to discuss how we can help you succeed.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              type: 'spring',
            }}
            className="p-4 grid gap-2 border border-gray-200 shadow-xl my-4 rounded-xl"
          >
            <h2 className="font-bold flex justify-between text-lg">
              CTO, Co-Founder
              {/* Mr. Preean */}
              <FaQuoteRight className="mr-3 mt-1 text-gray-500" />
            </h2>

            <p className="text-gray-500">
              Explore our solutions and don’t hesitate to contact our team if
              you have any questions or need more details. We're here to help
              and guide you toward success.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SolutionHomeSection;

const ImagesAndLinks = ({
  alt = 'web design',
  src = 'https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64ad4265f27f2a2ecddd973e_social-media%20(1)%201.svg',
  to = '#',
  imgClassName,
}) => {
  return (
    <Link to={to}>
      <img
        src={src}
        alt={alt}
        className={`p-6 shadow-md border border-gray-200 w-20 rounded-xl md:w-22 ${imgClassName}`}
        loading="lazy"
        title={alt}
      />
    </Link>
  );
};
