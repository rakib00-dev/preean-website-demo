import SecondTypeSection from '../SecondTypeSection';

const WhyChoose = () => {
  return (
    <SecondTypeSection>
      <div className=" justify-center items-center w-11/12 mx-auto md:flex gap-5">
        <div className="h-[204px] flex justify-center gap-5 items-center w-full flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg">
          <h5 className="font-extrabold text-lg">STRESS LESS</h5>
          <h3 className="text-4xl font-[900] text-blue-400">4.8</h3>
          <p>Our average satisfaction rating from hundreds of happy clients</p>
        </div>
        <div className="h-[204px] flex justify-center gap-5 items-center w-full flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg">
          <h5 className="font-extrabold text-lg">SHIP FASTER</h5>
          <h3 className="text-4xl font-[900] text-blue-400">24h</h3>
          <p>Average time to get your first draft back</p>
        </div>
        <div className="h-[204px] flex justify-center gap-5 items-center w-full flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg">
          <h5 className="font-extrabold text-lg">Cut Costs</h5>
          <h3 className="text-4xl font-[900] text-blue-400">50%</h3>
          <p>Reduced average cost vs alternatives</p>
        </div>
      </div>
    </SecondTypeSection>
  );
};

export default WhyChoose;
