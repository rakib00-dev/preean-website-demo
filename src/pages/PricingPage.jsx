import OurWork from '../Components/OurWork';
import PageHeader from '../Components/PageHeader';
import SendReqSection from '../Components/SendReqSection';
import WallOfLove from '../Components/WallOfLove';

const PricingPage = () => {
  return (
    <>
      <section className="my-16 mb-34">
        <PageHeader
          pageTitle="Pricing"
          PagePara="All-inclusive plans. No contract. Cancel anytime."
        >
          <div className="flex flex-row-reverse absolute px-5 top-0 items-center justify-between -z-10 w-full">
            <img
              src="./images/ourworkpage/yellow-squre.svg"
              alt="this is a yello element which is use to inchnge the design quality"
              loading="lazy"
              className="w-10 left-[10%] absolute -top-5 md:w-24"
            />
            <div className="absolue left-[25%] grid w-full">
              <img
                src="./images/ourworkpage/ring.svg"
                alt="this is a ring element which is use to inchnge the design quality"
                loading="lazy"
                className="hidden top-30 absolute  left-[20%] md:block md:top-35 md:left-[25%]"
              />
              <img
                src="./images/ourworkpage/blue-squre.svg"
                alt="this is a blue squre element which is use to inchnge the design quality"
                loading="lazy"
                className="hidden bottom-5 left-[35%] absolute md:block"
              />
            </div>

            <img
              src="./images/ourworkpage/double-squre.svg"
              alt="this is a tringle element which is use to inchnge the design quality"
              loading="lazy"
              className="hidden absolute -bottom-30 right-[10%] md:block"
            />
            <img
              src="./images/ourworkpage/tringle.svg"
              alt="this is a tringle element which is use to inchnge the design quality"
              loading="lazy"
              className="w-10 absolute top-5 right-[10%] md:right-[25%] md:w-8"
            />
          </div>
        </PageHeader>
      </section>
      <OurWork />
      <WallOfLove />
      <SendReqSection />
    </>
  );
};

export default PricingPage;
