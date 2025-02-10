import { useState } from 'react';
import { workPageFilterList } from '../importItems/workPageFilterList';
import { Link } from 'react-router-dom';

const WorkPageWorks = () => {
  const [filterLists, setFilterLists] = useState([...workPageFilterList]);
  console.log(filterLists?.map((e) => e.display));

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden">
      <div className="flex flex-wrap justify-center items-center mx-auto place-items-center w-11/12 gap-2">
        {filterLists.map((e, i) => (
          <div key={i} className="px-6 py-4 bg-gray-100 rounded">
            <Link to={e.path}>{e.display}</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkPageWorks;
