const ClientReview = () => {
  const client = [
    {
      img: './images/clientreview/client1.avif',
      thought: `“If my bestfriend was on the fence about trying ManyPixels, I would tell them that they needed to do it, because it’s a no-brainer.”`,
      name: 'Jeanette Knutti',
      position: 'CEO, Moxie Marketing',
      group: './images/clientreview/client1group.svg',
    },
    {
      img: './images/clientreview/client2.avif',
      thought: `“I love the quality of communication, the ease of platform. You can literally get out of bed, open your laptop and get critical things accomplished, without a lot back-and-forth or over-communicating.”`,
      name: 'Sean Mackenzie',
      position: 'Team Lead, Citi Habitats',
      group: './images/clientreview/client2group.svg',
    },
    {
      img: './images/clientreview/client3.avif',
      thought: `“The potential upside is so big. Your stuff could look good, it could land you bigger clients, and you could just have your entire brand be better. It’s a very low risk - high reward, so go ahead and just do it.”`,
      name: 'Itamar Marani',
      position: 'Founder & CEO, Marani Consulting',
      group: './images/clientreview/client3group.svg',
    },
  ];

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

        {client.slice(0, 1).map((e, i) => (
          <div className="grid gap-4 md:grid-cols-2 md:gap-15" key={i}>
            {/* client img */}
            <div className=" w-full">
              <img src={e.img} alt={e.thought} loading="lazy" />
            </div>
            {/* about him/her */}
            <article className="grid gap-3 md:flex md:flex-col md:mt-10">
              <div className="hidden capitalize text-lg font-bold  justify-center items-center gap-10 my-6 md:flex">
                <div className="border-b-2 border-b-gray-200 py-2 cursor-pointer">
                  agencies
                </div>
                <div className="border-b-2 border-b-gray-200 py-2 cursor-pointer">
                  marketing teams
                </div>
                <div className="border-b-2 border-b-gray-200 py-2 cursor-pointer">
                  entrepreneurs
                </div>
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
