import { Link } from 'react-router-dom';

const CompareFeatures = () => {
  return (
    <>
      <section
        className="w-full hidden max-w-7xl my-20 mx-auto sticky top-20 md:grid"
        style={{ zIndex: 1 }}
      >
        {/* large screen */}
        <div className="place-items-center mx-auto pb-4 w-full">
          {/* compare feature row */}
          <div className="flex justify-center w-full items-center gap-6">
            <h2 className="font-bold text-2xl w-fit">Compare features</h2>
            <MainRow
              smallTitle="Basic"
              bigTitleChild
              price="138"
              btnBg="bg-gray-600 hover:bg-gray-500"
            />
            <MainRow smallTitle="Standard" bigTitleChild price="250" />
            <MainRow smallTitle="Premium" bigTitleChild price="325" />
            <MainRow />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareFeatures;

const MainRow = ({
  smallTitle = 'Enterprise',
  bigTitleChild,
  btnBg = 'bg-blue-600 hover:bg-blue-500',
  price = '138',
}) => {
  return (
    <div className="grid place-items-center w-50 gap-1 border-b border-gray-300 p-2 bg-gradient-to-t from-gray-200/30 to-[#f8f9fb] rounded">
      <h6 className="font-bold text-md">{smallTitle}</h6>
      <h5 className="text-2xl">
        {bigTitleChild ? (
          <>
            ${price}
            <span className="text-sm">/wk</span>
          </>
        ) : (
          'Contact us'
        )}
      </h5>
      <div className="grid place-items-center my-5 gap-4 w-full overflow-hidden">
        <Link
          to={'/book-a-call'}
          className={`transition-all duration-200 text-white text-md font-semibold ${btnBg} py-2 px-7 rounded-md`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
