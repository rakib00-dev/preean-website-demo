import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionExploreMore = () => {
  return (
    <section className="w-full max-w-7xl md:my-20">
      <div className="relative py-10">
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Explore more
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-16`}
          >
            Helping clients to focus on what matters most
          </h2>
        </div>
        <div className="grid place-items-center md:grid-cols-3 px-4 md:px-12 py-10 gap-8 w-full">
          <Card />
          <Card
            title="How marketing teams deliver more MQLs with Calendly"
            imgSrc="/images/solutionPage/graphic-design/explore/explore-more2.png"
          />
          <Card
            title="How to automate your sales funnel (11 tips from revenue pros)"
            imgSrc="/images/solutionPage/graphic-design/explore/explore-more3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionExploreMore;

const Card = ({
  imgSrc = '/images/solutionPage/graphic-design/explore/explore-more1.png',
  title = 'Qualify, route, and book sales meetings instantly',
}) => {
  return (
    <div className="grid gap-4 relative text-center mb-5 rounded-lg cursor-pointer md:mb-15 group">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={imgSrc}
          alt=""
          loading="lazy"
          className="transition-all duration-300 rounded-3xl h-[160px] md:h-[200px] w-full group-hover:scale-110"
        />
      </div>
      <h2 className="font-extrabold flex text-xl text-start gap-4">{title}</h2>
      <Link className="transition-all duration-300 text-black font-medium text-lg flex items-center gap-2 group-hover:gap-4 group-hover:text-black/60">
        Read the blog post <FaArrowRight />
      </Link>
    </div>
  );
};
