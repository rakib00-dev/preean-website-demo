import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import OurWork from '../Components/OurWork';
import PageHeader from '../Components/PageHeader';
import AllPlans from '../Components/PricingPage/AllPlans';
import PricingCards from '../Components/PricingPage/PricingCards';
import PricingFaq from '../Components/PricingPage/PricingFaq';
import SendReqSection from '../Components/SendReqSection';
import WallOfLove from '../Components/WallOfLove';
import CompareFeatures from '../Components/PricingPage/CompareFeatures';

const PricingPage = () => {
  return (
    <>
      <>
        <PageHeader
          pageTitle="Pricing"
          pagePara="All-inclusive plans. No contract. Cancel anytime."
        >
          <PricingBoxes />
        </PageHeader>
      </>
      <PricingCards />
      <CompareFeatures />
      <AllPlans />
      <OurWork />
      <WallOfLove />
      <PricingFaq />
      <SendReqSection
        title={
          <h1 className="text-xl px-8 mt-15 mb-4 font-extrabold md:text-4xl xl:text-6xl">
            Still have some questions? <br />
            Jump on a quick call with our team.
          </h1>
        }
        button={
          <div className="flex flex-col mb-15 gap-5 md:mb-0 md:flex-row">
            <Link to={'/book-a-call'}>
              <Button
                text={'Book A Call'}
                className={
                  'transition-all rounded-md bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-blue-500/90 md:font-bold md:text-xl'
                }
              />
            </Link>
          </div>
        }
      />
    </>
  );
};

export default PricingPage;

const PricingBoxes = () => {
  return (
    <div className="flex absolute px-5 top-0 items-center justify-between -z-10 w-full">
      <img
        src="./images/ourpricingpage/deep-blue-squre.svg"
        alt="this is a deep blue squre element which is use to inchnge the design quality"
        loading="lazy"
        className="hidden w-10 left-[10%] absolute top-25 md:w-24 lg:block"
      />
      <img
        src="./images/ourpricingpage/red-ring.svg"
        alt="this is a red ring element which is use to inchnge the design quality"
        loading="lazy"
        className="top-2 w-8 absolute left-[10%] lg:block lg:left-[60%] lg:w-auto"
      />
      <img
        src="./images/ourpricingpage/deep-blue-tringle.svg"
        alt="this is a deep blue tringle squre element which is use to inchnge the design quality"
        loading="lazy"
        className="hidden bottom-5 left-[35%] absolute lg:block"
      />

      <img
        src="./images/ourpricingpage/yellow-squre.svg"
        alt="this is a yello element which is use to inchnge the design quality"
        loading="lazy"
        className="w-12 absolute top-2 right-[10%] lg:w-24 lg:top-9 "
      />
    </div>
  );
};
