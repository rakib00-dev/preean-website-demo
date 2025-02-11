import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const PricingFaq = () => {
  const [isFristClicked, setIsFristClicked] = useState(false);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);
  const [isFourthClicked, setIsFourthClicked] = useState(false);
  const [isFifthClicked, setIsFifthClicked] = useState(false);

  return (
    <section className="mx-auto w-full my-16 max-w-7xl">
      <div className="grid mx-2 grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 place-items-center md:mx-auto">
        {/* content */}
        <div className="grid gap-4">
          <h1 className="md:text-3xl text-2xl text-center md:text-start font-extrabold ">
            F.A.Q
          </h1>
          <p className="text-lg text-start w-70 md:text-2xl md:w-[25.5rem]">
            Can’t find the info your are looking for? Visit our Help Center or
            send us an email at Govenderpreean23@gmail.com
          </p>
        </div>
        {/* FAQS */}
        <div className="grid gap-6">
          <div
            className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer"
            onClick={() => {
              setIsFristClicked((prev) => !prev);
            }}
          >
            <h1 className="flex gap-5 ">
              What does unlimited really mean?{' '}
              <FaChevronDown
                className={
                  isFristClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
            <p></p>
          </div>
          <div
            className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer"
            onClick={() => {
              setIsSecondClicked((prev) => !prev);
            }}
          >
            <h1 className="flex gap-5 ">
              What's the turnaround time?{' '}
              <FaChevronDown
                className={
                  isSecondClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
          </div>
          <div
            className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer"
            onClick={() => {
              setIsThirdClicked((prev) => !prev);
            }}
          >
            <h1 className="flex gap-5 ">
              What type of designs can I request?{' '}
              <FaChevronDown
                className={
                  isThirdClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
          </div>
          <div
            className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer"
            onClick={() => {
              isFourthClicked((prev) => !prev);
            }}
          >
            <h1 className="flex gap-5 ">
              Do I own the rights to the designs?{' '}
              <FaChevronDown
                className={
                  isFourthClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
          </div>
          <div
            className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer"
            onClick={() => {
              setIsFifthClicked((prev) => !prev);
            }}
          >
            <h1 className="flex gap-5 ">
              Are there any hidden fees?{' '}
              <FaChevronDown
                className={
                  isFifthClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
