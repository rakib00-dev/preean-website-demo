import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SoluCommonCard = ({
  smallTitle = 'Improve communication rates',
  bigTitle = 'Book prospects when they’re ready to talk to sales',
  para = `Remove the steps that cause friction for prospects. Add Calendly to your website, landing pages, or display ads, and embed sales reps’ Calendly links into emails and campaigns to set your team up to win more deals.`,
  linkText = 'Get DesignPro work anywhere',
  imgSrc = '/images/solutionPage/graphic-design/outbound.png',
  bgColor,
  contentOrder = 'order-1',
  imgOrder = 'order-2',
  smallChild,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto ">
      <div
        className={`grid px-3 py-8 place-items-center md:grid-cols-2 md:px-6 ${bgColor}`}
      >
        <div className={`p-2 grid gap-7 md:w-[93%] ${contentOrder}`}>
          {smallChild ? (
            <p className="text-sm text-blue-800 bg-blue-100 px-2 py-1 w-fit rounded-full">
              {smallTitle}
            </p>
          ) : (
            <></>
          )}
          <h1 className="text-2xl md:text-4xl">{bigTitle}</h1>
          <p className="text-lg text-gray-600">{para}</p>
          <Link className="transition-all duration-300 text-blue-500 flex items-center gap-2 hover:gap-4 hover:text-black">
            {linkText} <FaArrowRight />
          </Link>
        </div>
        <img
          src={imgSrc}
          alt="solution common cards"
          loading="lazy"
          className={`${imgOrder}`}
        />
      </div>
    </section>
  );
};

export default SoluCommonCard;
