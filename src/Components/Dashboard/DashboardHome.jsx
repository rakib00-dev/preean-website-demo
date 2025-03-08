import { GoHome, GoPlus } from 'react-icons/go';
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="flex items-center gap-2 text-4xl">
            <GoHome />
            Dashboard
          </h1>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
