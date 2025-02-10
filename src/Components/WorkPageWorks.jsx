import { useState } from 'react';
import { workPageFilterList } from '../importItems/workPageFilterList';
import { Link, Outlet } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const WorkPageWorks = () => {
  const [filterLists, setFilterLists] = useState([...workPageFilterList]);
  const [currentItem, setcurrentItem] = useState('All');
  const [isClicked, setIsClicked] = useState(false);

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
        <div className="grid place-items-center lg:hidden">
          <button
            className="Uppercase flex justify-center items-center gap-2 cursor-pointer py-4 my-6 rounded-md px-8 border-gray-200 border-1"
            onClick={() => {
              setIsClicked((prev) => !prev);
            }}
          >
            {currentItem}{' '}
            <FaChevronDown
              className={
                isClicked ? `rotate-180 transition-all` : 'transition-all'
              }
            />
          </button>
        </div>
        <div
          className={
            isClicked
              ? 'scale-y-100 grid uppercase flex-wrap border-gray-200 transition-all  border-1 justify-center rounded-2xl items-start mx-auto w-11/12 gap-2 lg:hidden'
              : 'scale-y-0 grid uppercase flex-wrap border-gray-200 transition-all  border-1 justify-center rounded-2xl items-start mx-auto w-11/12 gap-2 lg:hidden'
          }
        >
          {filterLists.map((e, i) => (
            <div
              key={i}
              className="transition-all py-2  rounded-md hover:bg-blue-400 hover:text-white"
              onClick={() => {
                setcurrentItem(e.display);
                setIsClicked((prev) => !prev);
              }}
            >
              <Link
                // to={e.path}
                className="px-auto font-bold"
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
