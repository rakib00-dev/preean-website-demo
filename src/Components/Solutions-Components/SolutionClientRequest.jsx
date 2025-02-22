const SolutionClientRequest = () => {
  return (
    <section className="w-full my-12 p-4 md:px-10 max-w-7xl mx-auto">
      <div className="grid gap-10 p-4 md:p-18 bg-white shadow-2xl rounded-2xl">
        <img
          src="/images/solutionPage/graphic-design/text-request.svg"
          alt="text request"
          loading="lazy"
        />
        <p className="text-2xl">
          “Before adding Calendly Routing Forms, 60% of people who started to
          book a meeting on our website did not complete the booking. Now, we’re
          automatically sending demos to specific reps. We’re winning more
          business with less work."
        </p>
        <div className="flex gap-4 items-center">
          <img
            src="/images/solutionPage/graphic-design/client_headshot.jpeg"
            alt=""
            loading="lazy"
            className="w-20 rounded-full"
          />
          <div className="grid gap-2">
            <h5 className="text-lg">Kenneth Burke</h5>
            <p>Vice President of Marketing, Text Request</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionClientRequest;
