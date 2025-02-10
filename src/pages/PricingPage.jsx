import OurWork from '../Components/OurWork';
import PageHeader from '../Components/PageHeader';
import SendReqSection from '../Components/SendReqSection';
import WallOfLove from '../Components/WallOfLove';

const PricingPage = () => {
  return (
    <section className="my-16">
      <PageHeader
        pageTitle="Pricing"
        PagePara="All-inclusive plans. No contract. Cancel anytime."
      />
      <OurWork />
      <WallOfLove />
      <SendReqSection />
    </section>
  );
};

export default PricingPage;
