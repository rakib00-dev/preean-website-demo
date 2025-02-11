const PricingFaq = () => {
  return (
    <section className="mx-auto w-full my-16 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 place-items-center mx-auto">
        {/* content */}
        <div className="grid gap-4">
          <h1 className="md:text-3xl text-2xl text-center md:text-start font-extrabold ">
            F.A.Q
          </h1>
          <p className="text-lg text-start w-70 md:text-2xl md:w-[25.5rem]">
            Can’t find the info your are looking for? Visit our Help Center or
            send us an email at Govenderpreean23@gmail.com
          </p>
        </div>
        {/* FAQS */}
        <div className="">
          <div>
            <h1>What does unlimited really mean?</h1>
            <p></p>
          </div>
          <div>
            <h1>What's the turnaround time?</h1>
          </div>
          <div>
            <h1>What type of designs can I request?</h1>
          </div>
          <div>
            <h1>Do I own the rights to the designs?</h1>
          </div>
          <div>
            <h1>Are there any hidden fees?</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
