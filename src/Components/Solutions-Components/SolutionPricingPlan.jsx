import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionPricingPlan = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid place-items-center w-full py-12 md:py-17 px-2 md:px-12 bg-gray-200/40 md:grid-cols-3">
        <div className="grid gap-8 mb-12 px-2">
          <h2 className="text-4xl md:text-5xl">Pricing Plans</h2>
          <p>
            Get what you need to hit your goals: make scheduling easier and
            deliver a better meeting experience for all, while connecting your
            tech stack and staying secure.
          </p>
          <Link className="transition-all duration-300 text-lg font-medium text-blue-500 flex items-center gap-2 hover:gap-4 hover:text-black">
            View all plans <FaArrowRight />
          </Link>
        </div>
        <Card btnColor="bg-blue-500 hover:bg-blue-500/80" />
        <Card
          title="Enterprise"
          description="For teams who need enterprise-level security, admin control, and support. Includes enterprise-grade procurement"
          borderColor="border-[#194870]"
          titleColor="white"
          bgColor="bg-[#0b3558]"
          descColor="text-white"
          priceColor="text-white"
          btnColor="transparent border hover:bg-[#0b3578]/80"
        />
      </div>
    </section>
  );
};

export default SolutionPricingPlan;

const Card = ({
  title = 'Advanced',
  description = 'When your team needs to align on a scheduling process and collaborate efficiently.',
  titleColor = '#185ffc',
  price = '138',
  bgColor = 'bg-white',
  linkTextColor = 'text-white',
  priceColor = 'text-gray-700',
  btnText = 'View More',
  borderColor = 'border-blue-600',
  descColor = 'text-gray-500',
  lastColor,
  btnColor = 'bg-blue-500',
  children,
}) => {
  return (
    <div className={`w-[270px] mb-5 mx-2 rounded-2xl relative md:w-[370px]`}>
      {/* initial wraper */}
      <div
        className={`grid border border-t-10 rounded-2xl h-[350px] px-4 md:px-8 py-6 gap-4 ${bgColor} ${borderColor}`}
      >
        {children}
        <div className={`grid gap-4 ${lastColor}`}>
          <h5
            className={`font-extrabold text-3xl`}
            style={{ color: `${titleColor}` }}
          >
            {title}
          </h5>
          <p className={`text-md ${descColor}`}>{description}</p>
          <h5 className={`text-5xl font-extrabold`}>
            <span className={`${priceColor}`}>
              ${price}
              <span className="text-xl">/mo</span>
            </span>
          </h5>
        </div>
        <div className="grid w-full place-items-center ">
          <Link
            to={'/pricing'}
            className={`transition-all duration-200 ${linkTextColor} text-center py-3 font-medium px-3 rounded-lg md:text-lg w-full ${btnColor} `}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};
