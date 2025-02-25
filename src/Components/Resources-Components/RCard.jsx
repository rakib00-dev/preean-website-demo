import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RCard = ({
  imgSrc = '/images/solutionPage/graphic-design/explore/explore-more1.png',
  smallTitle = 'Explore more',
  title = 'Qualify, route, and book sales meetings instantly',
  para = 'Compare features, integrations, and pricing to choose the right meeting scheduler for you.',
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
      <p className="text-sm w-fit text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
        {smallTitle}
      </p>
      <h2 className="font-extrabold flex text-xl text-start gap-4">{title}</h2>
      <p className="flex text-start gap-4">{para}</p>
      <Link className="transition-all duration-300 text-black font-medium text-lg flex items-center gap-2 group-hover:gap-4 group-hover:text-black/60">
        Read the blog post <FaArrowRight />
      </Link>
    </div>
  );
};

export default RCard;
