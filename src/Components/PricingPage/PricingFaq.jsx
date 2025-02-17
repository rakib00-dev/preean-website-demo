import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const PricingFaq = ({
  firstTile = 'What does unlimited really mean?',
  secondTitle = "What's the turnaround time?",
  thirdTitle = 'What type of designs can I request?',
  fourthTitle = 'Do I own the rights to the designs?',
  fifthTitle = 'Are there any hidden fees?',
  p1 = 'With all our plans, you can submit as many design requests as you like and our designers will work on it every business day. Revisions are unlimited too! No matter how many requests or revisions you submit, the price stays the same. You are only limited in terms of speed as we are real humans doing real work. You can read more about the amount of design you can expect to receive on a daily basis here.',
  p2 = 'Turnaround time depends on various factors, including the type and complexity of the task, the quality of the design brief and the number of revisions needed. On average, you can expect to receive your design the next business day with our Advanced and Business plans and on the same day with our Dedicated Designer plan.',
  p3 = 'The answer is a lot ! If you can clearly explain or show it, then we can design it. If you feel like you don’t know what you want and would need multiple meetings with a brand strategist to figure it out, then DesignPro might not be the right fit for you at this time. Note that we do NOT offer 3D design, complex UI/UX, prototyping and coding. You can review our full Scope of Service here.',
  p4 = 'Yes. All of our work is done for you and for you only. You have complete ownership of the files as soon as you received them and are free to use them as you please. Source files (PSD, AI, INDD, FIG) are always included along with PNG, JPEG, SVG & PDF.',
  p5 = 'No! What you see is what you pay! Everything is included.',
}) => {
  const [isFristClicked, setIsFristClicked] = useState(false);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);
  const [isFourthClicked, setIsFourthClicked] = useState(false);
  const [isFifthClicked, setIsFifthClicked] = useState(false);

  return (
    <section className="mx-auto w-full my-16 max-w-7xl">
      <div className="grid mx-2  grid-cols-1 gap-10 md:gap-2 place-items-center md:mx-auto">
        {/* content */}
        <div className="grid place-items-center top-0  gap-4">
          <h1 className="md:text-6xl text-3xl text-center md:text-start font-extrabold ">
            Frequently Asked Questions
          </h1>
          <p className=" text-lg text-center w-70 md:text-2xl md:w-[35.5rem]">
            Can’t find the info your are looking for? send us an email at{' '}
            <a
              href="mailto:Govenderpreean23@gmail.com"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Govenderpreean23@gmail.com
            </a>
          </p>
        </div>
        {/* FAQS */}
        <div className="transition-all duration-300 grid w-full md:w-11/12 md:mt-20 md:mr-3 gap-6">
          <div className="bg-gray-200 h-auto text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsFristClicked((prev) => !prev);
              }}
            >
              {firstTile}{' '}
              <FaChevronDown
                className={
                  isFristClicked
                    ? `rotate-180 transition-all duration-300 mt-1`
                    : 'transition-all duration-300 mt-1'
                }
              />
            </h1>
            <p
              className={
                isFristClicked
                  ? `transition-all duration-300 scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all duration-300 scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              {p1}
            </p>
          </div>
          <div className="bg-gray-200 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsSecondClicked((prev) => !prev);
              }}
            >
              {secondTitle}{' '}
              <FaChevronDown
                className={
                  isSecondClicked
                    ? `rotate-180 transition-all duration-300 mt-1`
                    : 'transition-all duration-300 mt-1'
                }
              />
            </h1>
            <p
              className={
                isSecondClicked
                  ? `transition-all duration-300 scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all duration-300 scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              {p2}
            </p>
          </div>
          <div className="bg-gray-200 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsThirdClicked((prev) => !prev);
              }}
            >
              {thirdTitle}{' '}
              <FaChevronDown
                className={
                  isThirdClicked
                    ? `rotate-180 transition-all duration-300 mt-1`
                    : 'transition-all duration-300 mt-1'
                }
              />
            </h1>
            <p
              className={
                isThirdClicked
                  ? `transition-all duration-300 scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all duration-300 scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              {p3}
            </p>
          </div>
          <div className="bg-gray-200 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsFourthClicked((prev) => !prev);
              }}
            >
              {fourthTitle}{' '}
              <FaChevronDown
                className={
                  isFourthClicked
                    ? `rotate-180 transition-all duration-300 mt-1`
                    : 'transition-all duration-300 mt-1'
                }
              />
            </h1>
            <p
              className={
                isFourthClicked
                  ? `transition-all duration-300 scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all duration-300 scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              {p4}
            </p>
          </div>
          <div className="bg-gray-200 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsFifthClicked((prev) => !prev);
              }}
            >
              {fifthTitle}{' '}
              <FaChevronDown
                className={
                  isFifthClicked
                    ? `rotate-180 transition-all duration-300 mt-1`
                    : 'transition-all duration-300 mt-1'
                }
              />
            </h1>
            <p
              className={
                isFifthClicked
                  ? `transition-all duration-300 scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all duration-300 scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              {p5}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
