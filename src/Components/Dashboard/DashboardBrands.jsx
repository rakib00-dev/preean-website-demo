import { GoPlus } from 'react-icons/go';
import { IoMdArrowDropright } from 'react-icons/io';

const DashboardBrands = () => {
  return (
    <section className="mx-50">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">Brands</h1>
          <button className="flex text-lg bg-blue-500 font-medium items-center justify-center text-white py-1 px-2 gap-1 transition-all duration-300 hover:bg-blue-400 cursor-pointer">
            <GoPlus className="text-xl" /> Create Brand
          </button>
        </div>
        <p
          className="w-96 mb-7"
          style={{ color: 'var(--black-primary-terms)' }}
        >
          Store all your brand assets in one place. This will help you save time
          when submitting new requests.
        </p>
        <div>
          <h3 className="text-xl flex justify-start items-end">
            brands
            <IoMdArrowDropright className="transition-all duration-300 text-2xl rotate-90 text-blue-500" />
          </h3>
        </div>
      </div>
    </section>
  );
};

export default DashboardBrands;
