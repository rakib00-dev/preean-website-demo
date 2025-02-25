import { motion } from 'framer-motion';

const OurTools = () => {
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
      <div className="mx-5">
        <div className="w-full relative text-center py-6 px-10 rounded-md flex-col gap-2 leading-5 bg-gray-100 h-auto justify-between items-center md:flex md:flex-row md:rounded-xl xl:rounded-2xl">
          <div
            className={`flex flex-col justify-start gap-2 items-start md:gap-4 md:items-start md:my-8`}
          >
            <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
              our tools
            </p>
            <h2
              className={`font-extrabold text-[1.55rem] text-start w-full mb-4 leading-8 md:text-start md:text-[2.1rem] lg:text-[2.5rem] lg:leading-13`}
            >
              Serving businesses of every size <br />
              with digital and print designs
            </h2>
          </div>
          <div className="grid grid-cols-3 mb-15 gap-5 md:mb-0 md:grid md:grid-cols-3">
            <img
              src="../images/ourtools/photoshop.svg"
              alt="this is a photohsop logo image"
              loading="lazy"
              className=""
            />
            <img
              src="../images/ourtools/ai.svg"
              alt="this is an adobe illustration logo image"
              loading="lazy"
              className=""
            />

            <img
              src="../images/ourtools/canva.svg"
              alt="this is a canva logo image"
              loading="lazy"
              className=""
            />
            <img
              src="../images/ourtools/indesign.svg"
              alt="this is an indesign logo image"
              loading="lazy"
              className=""
            />

            <img
              src="../images/ourtools/aftereffect.svg"
              alt="this is an after effect logo image"
              loading="lazy"
              className=""
            />

            <img
              src="../images/ourtools/figma.svg"
              alt="this is a figma logo image"
              loading="lazy"
              className=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurTools;
