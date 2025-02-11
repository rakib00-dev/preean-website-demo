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
      <div className="grid mx-2  grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 place-items-center md:mx-auto">
        {/* content */}
        <div className="grid top-0  gap-4">
          <h1 className="md:text-3xl text-2xl text-center md:text-start font-extrabold ">
            F.A.Q
          </h1>
          <p className=" text-lg text-start w-70 md:text-2xl md:w-[25.5rem]">
            Can’t find the info your are looking for? Visit our Help Center or
            send us an email at Govenderpreean23@gmail.com
          </p>
        </div>
        {/* FAQS */}
        <div className="grid w-full md:mr-3 gap-6">
          <div className="bg-gray-100 h-auto w- text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsFristClicked((prev) => !prev);
              }}
            >
              What does unlimited really mean?{' '}
              <FaChevronDown
                className={
                  isFristClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
            <p
              className={
                isFristClicked
                  ? `transition-all scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              With all our plans, you can submit as many design requests as you
              like and our designers will work on it every business day.
              Revisions are unlimited too! No matter how many requests or
              revisions you submit, the price stays the same. You are only
              limited in terms of speed as we are real humans doing real work.
              You can read more about the amount of design you can expect to
              receive on a daily basis here.
            </p>
          </div>
          <div className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsSecondClicked((prev) => !prev);
              }}
            >
              What's the turnaround time?{' '}
              <FaChevronDown
                className={
                  isSecondClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
            <p
              className={
                isSecondClicked
                  ? `transition-all scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              Turnaround time depends on various factors, including the type and
              complexity of the task, the quality of the design brief and the
              number of revisions needed. On average, you can expect to receive
              your design the next business day with our Advanced and Business
              plans and on the same day with our Dedicated Designer plan.
            </p>
          </div>
          <div className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsThirdClicked((prev) => !prev);
              }}
            >
              What type of designs can I request?{' '}
              <FaChevronDown
                className={
                  isThirdClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
            <p
              className={
                isThirdClicked
                  ? `transition-all scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              Turnaround time depends on various factors, including the type and
              complexity of the task, the quality of the design brief and the
              number of revisions needed. On average, you can expect to receive
              your design the next business day with our Advanced and Business
              plans and on the same day with our Dedicated Designer plan.
            </p>
          </div>
          <div className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsFourthClicked((prev) => !prev);
              }}
            >
              Do I own the rights to the designs?{' '}
              <FaChevronDown
                className={
                  isFourthClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
            <p
              className={
                isFourthClicked
                  ? `transition-all scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              Turnaround time depends on various factors, including the type and
              complexity of the task, the quality of the design brief and the
              number of revisions needed. On average, you can expect to receive
              your design the next business day with our Advanced and Business
              plans and on the same day with our Dedicated Designer plan.
            </p>
          </div>
          <div className="bg-gray-100 text-md md:text-xl py-4 pr-10 pl-4 font-bold rounded-2xl cursor-pointer">
            <h1
              className="flex gap-5 "
              onClick={() => {
                setIsFifthClicked((prev) => !prev);
              }}
            >
              Are there any hidden fees?{' '}
              <FaChevronDown
                className={
                  isFifthClicked
                    ? `rotate-180 transition-all mt-1`
                    : 'transition-all mt-1'
                }
              />
            </h1>
            <p
              className={
                isFifthClicked
                  ? `transition-all scale-y-100 text-[1.1rem] font-light mt-4`
                  : `transition-all scale-y-0 hidden text-[1.1rem] font-light mt-4`
              }
            >
              Turnaround time depends on various factors, including the type and
              complexity of the task, the quality of the design brief and the
              number of revisions needed. On average, you can expect to receive
              your design the next business day with our Advanced and Business
              plans and on the same day with our Dedicated Designer plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
