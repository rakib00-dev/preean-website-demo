import { useState } from 'react';
import { clientArr } from '../importItems/client';

const ClientReview = () => {
  const [client, setClient] = useState(clientArr.slice(0, 1));
  const [isFirstClicked, setIsFirstClicked] = useState(true);
  const [isSecondClicked, setIsSecondClicked] = useState(false);
  const [isThirdClicked, setIsThirdClicked] = useState(false);

  console.log(client);

  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <section className="mx-auto my-12 w-full max-w-7xl md:my-16">
      <div className="mx-2 md:mx-10">
        {/* selection */}
        <div className=" mx-auto grid place-items-center my-6 w-full md:hidden">
          <select
            name="type"
            id="type"
            className="bg-gray-100 text-md py-4 px-8 rounded-md"
            onClick={handleSelect}
          >
            <option value="agencies">Agencies</option>
            <option value="marketing teams">Marketing teams</option>

            <option value="entrepreneurs">Entrepreneurs</option>
          </select>
        </div>

        {client.map((e, i) => (
          <div className="grid gap-4 md:grid-cols-2 md:gap-15" key={i}>
            {/* client img */}
            <div className=" w-full">
              <img src={e.img} alt={e.thought} loading="lazy" />
            </div>
            {/* about him/her */}
            <article className="grid gap-3 md:flex md:flex-col md:mt-10">
              <div className="hidden capitalize text-lg font-bold  justify-center items-center gap-10 my-6 md:flex">
                <button
                  className={
                    isFirstClicked
                      ? `capitalize border-b-2 py-2 cursor-pointer border-b-blue-400 text-blue-400`
                      : 'capitalize border-b-2 border-b-gray-200 py-2 cursor-pointer'
                  }
                  onClick={() => {
                    setClient(clientArr.slice(0, 1));
                    setIsFirstClicked(true);
                    setIsSecondClicked(false);
                    setIsThirdClicked(false);
                  }}
                >
                  agencies
                </button>
                <button
                  className={
                    isSecondClicked
                      ? `capitalize border-b-2 py-2 cursor-pointer border-b-blue-400 text-blue-400`
                      : 'capitalize border-b-2 border-b-gray-200 py-2 cursor-pointer'
                  }
                  onClick={() => {
                    setClient(clientArr.slice(1, 2));
                    setIsFirstClicked(false);
                    setIsSecondClicked(true);
                    setIsThirdClicked(false);
                  }}
                >
                  marketing teams
                </button>
                <button
                  className={
                    isThirdClicked
                      ? `capitalize border-b-2 py-2 cursor-pointer border-b-blue-400 text-blue-400`
                      : 'capitalize border-b-2 border-b-gray-200 py-2 cursor-pointer'
                  }
                  onClick={() => {
                    setClient(clientArr.slice(2, 3));
                    setIsFirstClicked(false);
                    setIsSecondClicked(false);
                    setIsThirdClicked(true);
                  }}
                >
                  entrepreneurs
                </button>
              </div>
              <p className="md:text-xl md:mb-5">{e.thought}</p>
              <div className="leading-10 md:grid md:gap-2">
                <h5 className="text-xl font-extrabold">{e.name}</h5>
                <p className="md:text-xl">{e.position}</p>
                <img src={e.group} alt={e.position} loading="lazy" />
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReview;
