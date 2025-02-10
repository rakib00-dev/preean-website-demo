import { useState } from 'react';
import { workPageFilterList } from '../importItems/workPageFilterList';
import { Link, Outlet } from 'react-router-dom';

const WorkPageWorks = () => {
  const [filterLists, setFilterLists] = useState([...workPageFilterList]);
  console.log(filterLists?.map((e) => e.display));

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden">
      <div>
        {/* large screen */}
        <div className="hidden uppercase flex-wrap justify-center items-center mx-auto place-items-center w-11/12 gap-2 lg:flex">
          {filterLists.map((e, i) => (
            <div
              key={i}
              className="transition-all py-4 border-gray-200 border-1 rounded-md hover:bg-blue-400 hover:text-white"
            >
              <Link
                to={e.path}
                className="px-6 font-bold text-xs py-4"
                style={{ fontFamily: 'Mulish' }}
              >
                {e.display}
              </Link>
            </div>
          ))}
        </div>
        {/* small screen */}
        <div className="hidden uppercase flex-wrap justify-center items-center mx-auto place-items-center w-11/12 gap-2 lg:hidden">
          {filterLists.map((e, i) => (
            <div
              key={i}
              className="transition-all py-4 border-gray-200 border-1 rounded-md hover:bg-blue-400 hover:text-white"
            >
              <Link
                to={e.path}
                className="px-6 font-bold text-xs py-4"
                style={{ fontFamily: 'Mulish' }}
              >
                {e.display}
              </Link>
            </div>
          ))}
        </div>
        {/* images */}
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default WorkPageWorks;
