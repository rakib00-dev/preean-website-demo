const AllPlans = () => {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl">
      <div className="bg-gray-100 grid place-items-center rounded-2xl p-5 py-7 gap-10 mx-2 md:mx-20 ">
        <h1 className="text-3xl font-[900] md:text-4xl">All plans include</h1>
        <ul className="grid md:grid-cols-3 gap-5">
          <li className="flex gap-2 text-xl md:mx-15">
            <img src="./images/ourpricingpage/card-images/done.svg" alt="" />{' '}
            Unlimited Requests
          </li>
          <li className="flex gap-2 text-xl md:mx-15">
            <img src="./images/ourpricingpage/card-images/done.svg" alt="" />{' '}
            Unlimited Revisions
          </li>
          <li className="flex gap-2 text-xl md:mx-15">
            <img src="./images/ourpricingpage/card-images/done.svg" alt="" />{' '}
            Native Source Files
          </li>
          <li className="flex gap-2 text-xl md:mx-15">
            <img src="./images/ourpricingpage/card-images/done.svg" alt="" />{' '}
            Unlimited Brands
          </li>
          <li className="flex gap-2 text-xl md:mx-15">
            <img src="./images/ourpricingpage/card-images/done.svg" alt="" />{' '}
            Free Stock Assets
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AllPlans;
