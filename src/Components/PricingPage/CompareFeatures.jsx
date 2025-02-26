// import { useEffect, useState } from 'react';
import { useState } from 'react';
import { FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CompareFeatures = () => {
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(true);
  const [isThirdClicked, setIsThirdClicked] = useState(true);

  const [isMoreFirstClicked, setIsMoreFirstClicked] = useState(true);
  const [isMoreSecondClicked, setIsMoreSecondClicked] = useState(true);
  const [isMoreThirdClicked, setIsMoreThirdClicked] = useState(true);
  // const [isOver, setIsOver] = useState('top-20');
  // const triggerPoint = 602;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (triggerPoint <= window.scrollY) {
  //       setIsOver('-top-96');
  //     } else {
  //       setIsOver('top-20');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // console.log(isOver);

  const SecondRow = ({ title = 'Scheduling', smallChildren }) => {
    return (
      <div className="flex justify-center w-full items-center border-b border-gray-300 gap-6">
        <h2 className="font-bold text-2xl text-start mr-20 py-4">{title}</h2>
        {smallChildren ? (
          smallChildren
        ) : (
          <>
            <MainRow borderBgMainRow=""> </MainRow>
            <MainRow borderBgMainRow=""> </MainRow>
            <MainRow borderBgMainRow=""> </MainRow>
            <MainRow borderBgMainRow=""> </MainRow>
          </>
        )}
      </div>
    );
  };

  const SmallSecondRow = ({ title = 'Scheduling', smallChildren }) => {
    return (
      <div className="flex justify-start w-full items-center border-b border-gray-300 gap-6">
        <h2 className="font-bold text-2xl text-start py-4">{title}</h2>
      </div>
    );
  };

  const ThirdRow = ({
    title = 'One-on-one meeting types',
    col1 = '‎',
    col2 = '‎',
    col3 = '‎',
    col4 = '‎',
  }) => {
    return (
      <div className="grid grid-cols-5 w-[88%] gap-10 items-center border-b border-gray-300/60">
        <p
          className="font-medium text-[14px] w-full text-start "
          style={{ color: '#0b3558' }}
        >
          {title}
        </p>
        <MainRow borderBgMainRow="bg-gray-100 py-6">{col1}</MainRow>
        <MainRow borderBgMainRow="bg-gray-100 py-6">{col2}</MainRow>
        <MainRow borderBgMainRow="bg-gray-100 py-6">{col3}</MainRow>
        <MainRow borderBgMainRow="bg-gray-100 py-6">{col4}</MainRow>
      </div>
    );
  };

  const SmallThirdRow = ({
    title = 'One-on-one meeting types',
    col1 = '‎',
    col2 = '‎',
  }) => {
    return (
      <div className="grid w-full place-items-center py-6 items-center bg-gray-100 border-b border-gray-300/60">
        <p
          className="font-medium text-[14px] w-full text-center py-2"
          style={{ color: '#0b3558' }}
        >
          {title}
        </p>
        <div className="flex w-full justify-center items-center">
          <SmallMainRow bgColor="bg-gray-100 text-center place-items-center">
            {col1}
          </SmallMainRow>
          <SmallMainRow bgColor="bg-gray-100 text-center place-items-center">
            {col2}
          </SmallMainRow>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* large screen */}
      <section
        className={`w-full transition-all duration-300 hidden max-w-7xl mt-20 mx-auto sticky top-20 md:grid`}
        style={{ zIndex: 1 }}
      >
        {/* large screen */}
        <div className="place-items-center mx-auto pb-4 w-full">
          {/* compare feature row */}
          <div className="flex justify-center w-full items-center gap-6">
            <h2 className="font-bold text-2xl w-fit">Compare features</h2>
            <MainRow
              smallTitle="Basic"
              bigTitleChild
              price="138"
              btnBg="bg-gray-600 hover:bg-gray-500"
            />
            <MainRow
              smallTitle="Standard"
              bigTitleChild
              price="250"
              btnBg={'bg-blue-600 hover:bg-blue-500'}
            />
            <MainRow
              smallTitle="Premium"
              bigTitleChild
              price="325"
              btnBg={'bg-blue-600 hover:bg-blue-500'}
            />
            <MainRow btnBg={'bg-blue-600 hover:bg-blue-500'} />
          </div>
        </div>
      </section>

      {/* second large elements */}
      <section className="w-full hidden max-w-7xl mb-20 mx-auto md:grid">
        {/* Scheduling */}
        <div className="place-items-center mx-auto pb-4 w-full">
          {/* scheduling title main row */}
          <SecondRow />
          <ThirdRow
            col1="1"
            col2="Unlimited"
            col3="Unlimited"
            col4="Unlimited"
          />
          <ThirdRow
            title="Connect calendars"
            col1="1"
            col2="6"
            col3="6"
            col4="6"
          />
          <ThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Customize your booking link"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col2={'Unlimited'}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
        </div>
        {/* integrations */}
        <div className="place-items-center my-10 mx-auto pb-4 w-full">
          {/* Integrations title main row */}
          <SecondRow title="Integrations" />
          <ThirdRow
            title="Google, Microsoft Teams, Outlook, and Office 365 calendar integrations"
            col1={'1'}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Zoom, Google Meet, Microsoft Teams and other video conferencing tools"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Custom webhooks to access Calendly meeting information in real-time"
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Stripe and PayPal for payment collection"
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="HubSpot, Mailchimp, and Zapier for automations"
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Automate reminder workflows with Gmail and Outlook"
            // col1={<span> </span>}
            col1={'Unlimited'}
            col2={'Unlimited'}
            col3={<FaCheckCircle className="text-blue-700" />}
          />
        </div>
        {/* business Support */}
        <div className="place-items-center my-10 mx-auto pb-4 w-full">
          {/* Business Support title main row */}
          <SecondRow title="Business Support" />
          <ThirdRow
            title="Help center and Design Pro community access"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="24/7 Email support"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="24/7 Chat support"
            col2={<FaCheckCircle className="text-blue-700" />}
            col3={<FaCheckCircle className="text-blue-700" />}
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Phone support"
            col4={<FaCheckCircle className="text-blue-700" />}
          />
          <ThirdRow
            title="Dedicated account support"
            col4={<FaCheckCircle className="text-blue-700" />}
          />
        </div>
      </section>

      {/* small screen compare */}
      <section
        className={`w-full transition-all duration-300 grid max-w-7xl mt-20 mx-auto md:hidden`}
      >
        {/* samll screen */}
        <div className="mx-auto pb-4 w-full">
          {/* compare feature row */}
          <div className="flex flex-col justify-center w-full items-center gap-6">
            <h2 className="font-bold text-2xl text-center w-fit">
              Compare features
            </h2>
          </div>
        </div>
      </section>
      <div
        className="flex justify-around mt-4 mb-2 sticky top-20 md:hidden"
        style={{ zIndex: 1 }}
      >
        <SmallMainRow
          smallTitle="Basic"
          price="138"
          style={'black'}
          bgColor="text-black bg-gray-200"
        />
        <SmallMainRow
          smallTitle="Standard"
          bigTitleChild
          price="250"
          bgColor={'text-white bg-blue-500'}
        />
      </div>

      {/* second small elements compare */}
      <section className="w-full grid max-w-7xl mb-20 mx-auto md:hidden">
        {/* Scheduling */}
        <div
          className={`transition-all duration-300 grid place-items-center mx-auto pb-4 w-full overflow-hidden ${
            isFirstClicked ? 'h-16' : 'h-[1000px]'
          }`}
        >
          {/* scheduling title main row */}
          <span
            className="flex transition-all duration-300 justify-center items-center w-full px-6"
            onClick={() => {
              setIsFirstClicked((prev) => !prev);
            }}
          >
            <SmallSecondRow smallChildren />
            <FaChevronDown
              className={`transition-all duration-300 ${
                isFirstClicked ? `rotate-270 mt-1` : 'mt-1'
              }`}
            />
          </span>
          <SmallThirdRow col1="1" col2="Unlimited" />
          <SmallThirdRow title="Connect calendars" col1="1" col2="6" />
          <SmallThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Customize your booking link"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col1={'Unlimited'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <div className="relative flex gap-2 my-4">
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* integrations */}
        <div
          className={`transition-all duration-300 grid place-items-center mx-auto pb-4 w-full overflow-hidden ${
            isSecondClicked ? 'h-16' : 'h-[1000px]'
          }`}
        >
          {/* integrations title main row */}
          <span
            className="flex transition-all duration-300 justify-center items-center w-full px-6"
            onClick={() => {
              setIsSecondClicked((prev) => !prev);
            }}
          >
            <SmallSecondRow smallChildren title="integrations" />
            <FaChevronDown
              className={`transition-all duration-300 ${
                isSecondClicked ? `rotate-270 mt-1` : 'mt-1'
              }`}
            />
          </span>
          <SmallThirdRow col1="1" col2="Unlimited" />
          <SmallThirdRow title="Connect calendars" col1="1" col2="6" />
          <SmallThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Customize your booking link"
            col1={'-'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={'-'}
          />
          <SmallThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col1={'Unlimited'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <div className="relative flex gap-2 my-4">
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Bussiness Support */}
        <div
          className={`transition-all duration-300 grid place-items-center mx-auto pb-4 w-full overflow-hidden ${
            isThirdClicked ? 'h-16' : 'h-[1000px]'
          }`}
        >
          {/* Bussiness Support title main row */}
          <span
            className="flex transition-all duration-300 justify-center items-center w-full px-6"
            onClick={() => {
              setIsThirdClicked((prev) => !prev);
            }}
          >
            <SmallSecondRow smallChildren title="Bussiness Support" />
            <FaChevronDown
              className={`transition-all duration-300 ${
                isThirdClicked ? `rotate-270 mt-1` : 'mt-1'
              }`}
            />
          </span>
          <SmallThirdRow col1="1" col2="Unlimited" />
          <SmallThirdRow title="Connect calendars" col1="1" col2="6" />
          <SmallThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Customize your booking link"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col1={'Unlimited'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <div className="relative flex gap-2 my-4">
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* small screen teams and enterprice */}
      <section
        className={`w-full transition-all duration-300 grid max-w-7xl mt-20 mx-auto md:hidden`}
      >
        {/* samll screen */}
        <div className="mx-auto pb-4 w-full">
          {/* compare feature row */}
          <div className="flex flex-col justify-center w-full items-center gap-6">
            <h2 className="font-bold text-2xl text-center w-fit">
              Even more for teams and Enterprise Plans
            </h2>
            <p className="text-md text-center w-fit">
              Find the subscription that makes the most sense for you or your
              team
            </p>
          </div>
        </div>
      </section>
      <div
        className="flex justify-around mt-6 sticky top-20 md:hidden"
        style={{ zIndex: 2 }}
      >
        <SmallMainRow
          smallTitle="Premium"
          price="325"
          style={'black'}
          bgColor="text-black bg-gray-200"
        />
        <SmallMainRow
          smallTitle="Contact us"
          bigTitleChild
          // price="Contact us"
          contactChild
          bgColor={'text-white bg-gray-700'}
        />
      </div>

      {/* second small elements teams and enterprice */}
      <section className="w-full grid max-w-7xl mb-20 mx-auto md:hidden">
        {/* Scheduling */}
        <div
          className={`transition-all duration-300 grid place-items-center mx-auto pb-4 w-full overflow-hidden ${
            isMoreFirstClicked ? 'h-16' : 'h-[1000px]'
          }`}
        >
          {/* scheduling title main row */}
          <span
            className="flex transition-all duration-300 justify-center items-center w-full px-6"
            onClick={() => {
              setIsMoreFirstClicked((prev) => !prev);
            }}
          >
            <SmallSecondRow smallChildren />
            <FaChevronDown
              className={`transition-all duration-300 ${
                isMoreFirstClicked ? `rotate-270 mt-1` : 'mt-1'
              }`}
            />
          </span>
          <SmallThirdRow col1="1" col2="Unlimited" />
          <SmallThirdRow title="Connect calendars" col1="1" col2="6" />
          <SmallThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Customize your booking link"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col1={'Unlimited'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <div className="relative flex gap-2 my-4">
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* integrations */}
        <div
          className={`transition-all duration-300 grid place-items-center mx-auto pb-4 w-full overflow-hidden ${
            isMoreSecondClicked ? 'h-16' : 'h-[1000px]'
          }`}
        >
          {/* integrations title main row */}
          <span
            className="flex transition-all duration-300 justify-center items-center w-full px-6"
            onClick={() => {
              setIsMoreSecondClicked((prev) => !prev);
            }}
          >
            <SmallSecondRow smallChildren title="integrations" />
            <FaChevronDown
              className={`transition-all duration-300 ${
                isMoreSecondClicked ? `rotate-270 mt-1` : 'mt-1'
              }`}
            />
          </span>
          <SmallThirdRow col1="1" col2="Unlimited" />
          <SmallThirdRow title="Connect calendars" col1="1" col2="6" />
          <SmallThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Customize your booking link"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col1={'Unlimited'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <div className="relative flex gap-2 my-4">
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Bussiness Support */}
        <div
          className={`transition-all duration-300 grid place-items-center mx-auto pb-4 w-full overflow-hidden ${
            isMoreThirdClicked ? 'h-16' : 'h-[1000px]'
          }`}
        >
          {/* Bussiness Support title main row */}
          <span
            className="flex transition-all duration-300 justify-center items-center w-full px-6"
            onClick={() => {
              setIsMoreThirdClicked((prev) => !prev);
            }}
          >
            <SmallSecondRow smallChildren title="Bussiness Support" />
            <FaChevronDown
              className={`transition-all duration-300 ${
                isMoreThirdClicked ? `rotate-270 mt-1` : 'mt-1'
              }`}
            />
          </span>
          <SmallThirdRow col1="1" col2="Unlimited" />
          <SmallThirdRow title="Connect calendars" col1="1" col2="6" />
          <SmallThirdRow
            title="Unlimited meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Customize your booking link"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Mobile app & browser extension"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="Meeting polls and one-off meetings"
            col1={<FaCheckCircle className="text-blue-700" />}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <SmallThirdRow
            title="View contact profiles and scheduling activity"
            // col1={<span> </span>}

            col1={'Unlimited'}
            col2={<FaCheckCircle className="text-blue-700" />}
          />
          <div className="relative flex gap-2 my-4">
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
            <Link
              to={'/contact'}
              className="bg-blue-950 text-white py-4 px-7 text-sm font-bold rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareFeatures;

const MainRow = ({
  smallTitle = 'Enterprise',
  bigTitleChild,
  btnBg,
  price = '138',
  borderBgMainRow = 'border-b border-gray-300 bg-gradient-to-t from-gray-200/30 to-[#f8f9fb]',
  children,
}) => {
  return (
    <div
      className={`grid place-items-center w-50 gap-1 p-2 rounded ${borderBgMainRow}`}
    >
      {children ? (
        children
      ) : (
        <>
          <h6 className="font-bold text-md">{smallTitle}</h6>
          <h5 className="text-2xl">
            {bigTitleChild ? (
              <>
                ${price}
                <span className="text-sm">/wk</span>
              </>
            ) : (
              'Contact us'
            )}
          </h5>
          {btnBg ? (
            <div className="grid place-items-center my-5 gap-4 w-full overflow-hidden">
              <Link
                to={'/contact'}
                className={`transition-all duration-200 text-white text-md font-semibold ${btnBg} py-2 px-7 rounded-md`}
              >
                Get Started
              </Link>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

const SmallMainRow = ({
  smallTitle = 'Enterprise',
  price = '138',
  style = 'white',
  bgColor,
  children,
  contactChild,
}) => {
  return (
    <div className={`grid grid-cols-1 w-full gap-1 p-2 ${bgColor}`}>
      {children ? (
        children
      ) : (
        <>
          <h6 className="font-bold text-center text-md">{smallTitle}</h6>
          <h5 className="text-2xl text-center" style={{ color: `${style}` }}>
            {contactChild ? (
              'Contact Us'
            ) : (
              <>
                ${price}
                <span className="text-sm">/wk</span>
              </>
            )}
          </h5>
        </>
      )}
    </div>
  );
};
