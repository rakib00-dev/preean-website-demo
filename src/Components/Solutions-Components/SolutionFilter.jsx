import { NavLink } from 'react-router-dom';

const SolutionFilter = () => {
  return (
    <section className="w-full max-w-7xl md:my-20">
      <div className="relative py-10 md:py-30">
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Easy work process
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-13`}
          >
            DesignPro's features for clients
          </h2>
        </div>
        <div className="flex mt-12 mx-16 w-full text-2xl font-medium">
          <NavLink
            className="cursor-pointer py-3 px-6 border-b-3 border-gray-200"
            style={{ color: '#0b3558' }}
          >
            Build Website
          </NavLink>
          <NavLink
            className="cursor-pointer py-3 px-6 border-b-3 border-gray-200"
            style={{ color: '#0b3558' }}
          >
            Thumbnail Design
          </NavLink>
          <NavLink
            className="cursor-pointer py-3 px-6 border-b-3 border-gray-200"
            style={{ color: '#0b3558' }}
          >
            Lead Generation
          </NavLink>
          <NavLink
            className="cursor-pointer py-3 px-6 border-b-3 border-gray-200"
            style={{ color: '#0b3558' }}
          >
            Social Media
          </NavLink>
          <NavLink
            className="cursor-pointer py-3 px-6 border-b-3 border-gray-200"
            style={{ color: '#0b3558' }}
          >
            Canva Design
          </NavLink>
        </div>
        <div className=" w-full"></div>
      </div>
    </section>
  );
};

export default SolutionFilter;
