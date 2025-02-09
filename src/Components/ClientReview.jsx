import { useState } from 'react';
import { clientArr } from '../importItems/client';

const ClientReview = () => {
  const [client, setClient] = useState(clientArr);
  const [currentItem, setCurrentItem] = useState('');

  return (
    <section className="mx-auto my-12 w-full max-w-7xl md:my-16">
      <div className="mx-2 md:mx-10">
        {/* selection */}
        <div className=" mx-auto place-items-center my-6 w-full md:hidden">
          <select
            name="type"
            id="type"
            className="bg-gray-100 text-md py-4 px-8 rounded-md"
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
                  className="capitalize border-b-2 py-2 cursor-pointer border-b-blue-400 text-blue-400"
                  // onClick={setCurrentItem('agencies')}
                >
                  agencies
                </button>
                <button
                  className="capitalize border-b-2 border-b-gray-200 py-2 cursor-pointer"
                  // onClick={setCurrentItem('marketing')}
                >
                  marketing teams
                </button>
                <button
                  className="capitalize border-b-2 border-b-gray-200 py-2 cursor-pointer"
                  onClick={setCurrentItem('entrepreneurs')}
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
