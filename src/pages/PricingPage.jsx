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
          <PricingBoxes />
        </PageHeader>
      </section>
      <OurWork />
      <WallOfLove />
      <SendReqSection />
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
        className="hidden w-10 left-[10%] absolute top-25 md:w-24 md:block"
      />
      <img
        src="./images/ourpricingpage/red-ring.svg"
        alt="this is a red ring element which is use to inchnge the design quality"
        loading="lazy"
        className=" top-30 absolute left-[20%] md:-top-5 md:left-[60%]"
      />
      <img
        src="./images/ourpricingpage/deep-blue-tringle.svg"
        alt="this is a deep blue tringle squre element which is use to inchnge the design quality"
        loading="lazy"
        className="bottom-5 left-[35%] absolute"
      />

      <img
        src="./images/ourpricingpage/yellow-squre.svg"
        alt="this is a yello element which is use to inchnge the design quality"
        loading="lazy"
        className="w-10 absolute top-5 right-[10%] md:w-24"
      />
    </div>
  );
};
