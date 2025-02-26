import { useState } from 'react';
import { clientArr } from '../importItems/client';
import { motion } from 'framer-motion';

const ClientReview = () => {
  const [client, setClient] = useState(clientArr.slice(0, 1));
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);
  const [isFourthClicked, setIsFourthClicked] = useState(false);

  // const handleSelect = (e) => {
  //   if (client) {
  //     console.log(e.target[0].value);
  //     if (e.target.value === e.target[0].value) {
  //       setClient(clientArr.slice(0, 1));
  //     }
  //     if (e.target.value === e.target[1].value) {
  //       setClient(clientArr.slice(1, 2));
  //     }
  //     if (e.target.value === e.target[2].value) {
  //       return setClient(clientArr.slice(2, 3));
  //     }
  //     if (e.target.value === e.target[3].value) {
  //       return setClient(clientArr.slice(3, 4));
  //     }
  //   }
  // };

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        type: 'spring',
      }}
      className="mx-auto my-12 w-full max-w-7xl md:my-16"
    >
      <div className="mx-2 md:mx-10">
        {/* selection */}
        <div className="mx-auto flex flex-col justify-center mt-6 w-full md:flex-row">
          <button
            className={
              isFirstClicked
                ? `capitalize px-4 md:px-20 border-b-2 py-3 md:py-8 cursor-pointer border-b-blue-400 text-blue-400`
                : 'capitalize px-4 md:px-20 border-b-2 border-b-gray-200 filter brightness-100 -invert-50 saturate-0 py-3 md:py-8 cursor-pointer'
            }
            onClick={() => {
              setClient(clientArr.slice(0, 1));
              setIsFirstClicked(true);
              setIsSecondClicked(false);
              setIsThirdClicked(false);
              setIsFourthClicked(false);
            }}
          >
            <img
              src="/images/clientreview/company-1.svg"
              alt=""
              loading="lazy"
              className="w-15 h-15 md:h-auto md:w-auto"
            />
          </button>
          <button
            className={
              isSecondClicked
                ? `capitalize px-4 md:px-20 border-b-2 py-3 md:py-8 cursor-pointer border-b-blue-400 text-blue-400`
                : 'capitalize px-4 md:px-20 border-b-2 border-b-gray-200 filter brightness-100 -invert-50 saturate-0 py-3 md:py-8 cursor-pointer'
            }
            onClick={() => {
              setClient(clientArr.slice(1, 2));
              setIsFirstClicked(false);
              setIsSecondClicked(true);
              setIsThirdClicked(false);
              setIsFourthClicked(false);
            }}
          >
            <img
              src="/images/clientreview/company-2.svg"
              alt=""
              loading="lazy"
              className="w-15 h-15 md:h-auto md:w-auto"
            />
          </button>
          <button
            className={
              isThirdClicked
                ? `capitalize px-4 md:px-20 border-b-2 py-3 md:py-8 cursor-pointer border-b-blue-400 text-blue-400`
                : 'capitalize px-4 md:px-20 border-b-2 border-b-gray-200 filter brightness-100 -invert-50 saturate-0 py-3 md:py-8 cursor-pointer'
            }
            onClick={() => {
              setClient(clientArr.slice(2, 3));
              setIsFirstClicked(false);
              setIsSecondClicked(false);
              setIsThirdClicked(true);
              setIsFourthClicked(false);
            }}
          >
            <img
              src="/images/clientreview/company-3.svg"
              alt=""
              loading="lazy"
              className="w-15 h-15 md:h-auto md:w-auto"
            />
          </button>
          <button
            className={
              isFourthClicked
                ? `capitalize px-4 md:px-20 border-b-2 py-3 md:py-8 cursor-pointer border-b-blue-400 text-blue-400`
                : 'capitalize px-4 md:px-20 border-b-2 border-b-gray-200 filter brightness-100 -invert-50 saturate-0 py-3 md:py-8 cursor-pointer'
            }
            onClick={() => {
              setClient(clientArr.slice(3, 4));
              setIsFirstClicked(false);
              setIsSecondClicked(false);
              setIsThirdClicked(false);
              setIsFourthClicked(true);
            }}
          >
            <img
              src="/images/clientreview/company-4.svg"
              alt=""
              loading="lazy"
              className="w-15 h-15 md:h-auto md:w-auto"
            />
          </button>
        </div>

        {client.map((e, i) => (
          <section
            className="w-full my-12 p-4 md:px-10 max-w-7xl mx-auto"
            key={i}
          >
            <div className="grid gap-10 p-4 md:p-14 bg-white shadow-2xl rounded-2xl">
              <p className="md:text-2xl">{e.thought}</p>
              <div className="flex gap-4 items-center">
                <img
                  src={e.img}
                  alt={e.thought}
                  loading="lazy"
                  className="w-20 rounded-full"
                />
                <div className="grid gap-2">
                  <h5 className="text-lg">{e.name}</h5>
                  <p>{e.position}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </motion.section>
  );
};

export default ClientReview;
