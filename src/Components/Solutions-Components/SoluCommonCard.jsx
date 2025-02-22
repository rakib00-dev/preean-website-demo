import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SoluCommonCard = ({
  imgSrc = '/images/solutionPage/graphic-design/outbound.png',
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid mx-3 md:mx-6 py-8 place-items-center md:grid-cols-2 ">
        <div className="p-2 grid gap-7 md:w-[93%]">
          <p className="capitalize text-sm text-blue-800 bg-blue-100 px-2 py-1 w-fit rounded-full">
            improve communication rates
          </p>
          <h1 className="text-2xl md:text-4xl">
            Book prospects when they’re ready to talk to sales
          </h1>
          <p className="text-lg text-gray-600">
            Remove the steps that cause friction for prospects. Add Calendly to
            your website, landing pages, or display ads, and embed sales reps’
            Calendly links into emails and campaigns to set your team up to win
            more deals.
          </p>
          <Link className="transition-all duration-300 text-blue-500 flex items-center gap-2 hover:gap-4 hover:text-black">
            Embed Calendly anywhere <FaArrowRight />
          </Link>
        </div>
        <img src={imgSrc} alt="solution common cards" loading="lazy" />
      </div>
    </section>
  );
};

export default SoluCommonCard;
