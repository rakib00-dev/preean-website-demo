import { Link } from 'react-router-dom';

const SolutionReady = () => {
  return (
    <section className="w-full max-w-7xl">
      <div className="grid place-items-center p-8 py-20 gap-8 bg-blue-100/40 w-full">
        <h3 className="text-5xl text-center md:text-6xl">
          Ready to work with us?
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Link className="transition-all duration-300 text-white font-bold bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </Link>
          <Link className="font-bold px-4 py-2 border rounded-md text-[#0b3558c9]">
            Book A Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionReady;
