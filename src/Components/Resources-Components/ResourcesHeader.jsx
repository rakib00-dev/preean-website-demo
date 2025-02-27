import DumbbellShape from '../DumbbellShape';
import RoundedStar from '../RoundedStar';
import SemiCircle from '../SemiCircle';
import TriangleShape from '../TriangleShape';

const ResourcesHeader = () => {
  return (
    <section className="w-full max-w-7xl overflow-hidden">
      <div className="relative py-10 bg-[#f0f3f8]">
        <div className="top-10 -right-30 absolute z-10 hidden md:block">
          <RoundedStar
            className={
              'absolute top-0 right-0 w-[20rem] opacity-100 SendReqRoundedStarAnima rotate-90 '
            }
            fill="#ef457e"
          />
          <SemiCircle
            className={
              'absolute top-0 right-0 w-[20rem] opacity-80 rotate-90 SendReqSemiCircleAnima '
            }
          />
        </div>
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Our work process
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-16`}
          >
            Take a look at DesignPro's work process for clients
          </h2>
        </div>
        <div className="top-10 -left-30 absolute hidden md:block">
          <TriangleShape
            className={
              'absolute top-0 w-[26rem] opacity-100 SendRedTriangleShapeAnima rotate-270 hidden md:block'
            }
          />
          <DumbbellShape
            className={
              'absolute top-0 w-[20rem] opacity-80 SendRedDumbbellShapeAnima hidden md:block'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ResourcesHeader;
