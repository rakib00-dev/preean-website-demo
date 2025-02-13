import { Link } from 'react-router-dom';
import { SoluImgList } from '../importItems/solutionsImgList';
import { FaQuoteRight } from 'react-icons/fa';

const SolutionHomeSection = () => {
  const imgList = [...SoluImgList];

  return (
    <section className="mx-auto w-full max-w-7xl my-20">
      <div className="mx-3 md:mx-16">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8 md:mx-12`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            our solutions
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-full mb-4 leading-8 lg:text-start md:text-[2.1rem] md:w-4/5 lg:text-[2.5rem] lg:leading-13`}
          >
            Check out our solutions and resources we provide
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-4 md:mx-12 md:justify-start">
          {imgList.map((e, i) => (
            <ImagesAndLinks alt={e.alt} src={e.src} to={e.to} key={i} />
          ))}
        </div>

        <div className="grid my-7 justify-center mt-10 items-start md:gap-4 md:mx-12 md:grid-cols-2 md:mt-4">
          <div className="p-4 grid gap-2 border border-gray-200 shadow-xl md:my-4 rounded-xl">
            <h2 className="font-bold flex justify-between text-lg">
              Mr. Preean
              <FaQuoteRight className="mr-3 mt-1 text-gray-500" />
            </h2>

            <p className="text-gray-500">
              Check out our solutions and contact us if you want to know more
              about us. Explore our innovative solutions and reach out to us for
              more information or to discuss how we can help you succeed.
            </p>
          </div>
          <div className="p-4 grid gap-2 border border-gray-200 shadow-xl my-4 rounded-xl">
            <h2 className="font-bold flex justify-between text-lg">
              Mr. Preean
              <FaQuoteRight className="mr-3 mt-1 text-gray-500" />
            </h2>

            <p className="text-gray-500">
              Explore our solutions and don’t hesitate to contact our team if
              you have any questions or need more details. We're here to help
              and guide you toward success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHomeSection;

const ImagesAndLinks = ({
  alt = 'web design',
  src = 'https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/64ad4265f27f2a2ecddd973e_social-media%20(1)%201.svg',
  to = '#',
  imgClassName,
}) => {
  return (
    <Link to={to}>
      <img
        src={src}
        alt={alt}
        className={`p-6 shadow-md border border-gray-200 w-20 rounded-xl md:w-22 ${imgClassName}`}
        loading="lazy"
        title={alt}
      />
    </Link>
  );
};
