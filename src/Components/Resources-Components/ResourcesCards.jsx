import RCard from './RCard';

const ResourcesCards = ({ children }) => {
  return (
    <section className="w-full max-w-7xl">
      <div className="relative py-8 md:py-18">
        <div className="grid place-items-center mx-auto gap-5">
          {/* <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Explore more
          </p> */}
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-5xl md:text-center md:w-4/5 lg:leading-16`}
          >
            Helping clients to focus on what matters most
          </h2>
        </div>
        <div className="grid place-items-center md:grid-cols-3 px-4 md:px-12 py-10 gap-8 w-full">
          {children ? (
            children
          ) : (
            <>
              <RCard />
              <RCard
                title="How marketing teams deliver more MQLs with Calendly"
                imgSrc="/images/solutionPage/graphic-design/explore/explore-more2.png"
              />
              <RCard
                title="How to automate your sales funnel (11 tips from revenue pros)"
                imgSrc="/images/solutionPage/graphic-design/explore/explore-more3.png"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesCards;
