import ResourcesHeader from '../Components/Resources-Components/ResourcesHeader';
import ResourcesCards from '../Components/Resources-Components/ResourcesCards';
import RCard from '../Components/Resources-Components/RCard';

const DesignBlogsPage = () => {
  return (
    <>
      <ResourcesHeader />
      <ResourcesCards />
      <ResourcesCards>
        <RCard
          title="How to automate your sales funnel (11 tips from revenue pros)"
          imgSrc="/images/solutionPage/graphic-design/explore/explore-more3.png"
        />
        <RCard
          title="How marketing teams deliver more MQLs with Calendly"
          imgSrc="/images/solutionPage/graphic-design/explore/explore-more2.png"
        />
        <RCard />
      </ResourcesCards>
    </>
  );
};

export default DesignBlogsPage;
