// import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CompareFeatures = () => {
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

  const SecondRow = ({ title = 'Scheduling' }) => {
    return (
      <div className="flex justify-center w-full items-center border-b border-gray-300 gap-6">
        <h2 className="font-bold text-2xl text-start mr-20 py-4">{title}</h2>
        <MainRow borderBgMainRow=""> </MainRow>
        <MainRow borderBgMainRow=""> </MainRow>
        <MainRow borderBgMainRow=""> </MainRow>
        <MainRow borderBgMainRow=""> </MainRow>
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

  return (
    <>
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
            <MainRow smallTitle="Standard" bigTitleChild price="250" />
            <MainRow smallTitle="Premium" bigTitleChild price="325" />
            <MainRow />
          </div>
        </div>
      </section>

      {/* second elements */}
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
    </>
  );
};

export default CompareFeatures;

const MainRow = ({
  smallTitle = 'Enterprise',
  bigTitleChild,
  btnBg = 'bg-blue-600 hover:bg-blue-500',
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
          <div className="grid place-items-center my-5 gap-4 w-full overflow-hidden">
            <Link
              to={'/book-a-call'}
              className={`transition-all duration-200 text-white text-md font-semibold ${btnBg} py-2 px-7 rounded-md`}
            >
              Get Started
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
