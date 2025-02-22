const SolutionCompare = () => {
  return (
    <section className="w-full max-w-7xl md:my-20">
      <div className="relative py-10">
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            Improved marketing funnel
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-16`}
          >
            Convert high-value leads and fill pipeline faster
          </h2>
        </div>
        <div className="grid md:grid-cols-3 px-12 py-10 w-full">
          <Cards />
          <div className="w-[1px] h-auto bg-black/10 mx-auto md:block" />
          <div className="w-auto h-[1px] bg-black/10 my-12 md:hidden" />
          <Cards
            title="100% increase in demos"
            imgSrc="/images/solutionPage/graphic-design/done.svg"
            list1="Add instant scheduling to existing forms"
            list2="Respond before competitors"
            list3="Automatically match leads with the right rep"
            list4="Use distribution tools for leads that don’t book"
            list5="Automate team handoffs and sync data"
            list6="Improve your buyer journey"
            paraChild={
              <p className="text-sm w-fit text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
                Improved marketing funnel
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionCompare;

const Cards = ({
  paraChild,
  title = 'Losing leads from:',
  imgSrc = '/images/solutionPage/graphic-design/cross.svg',
  list1 = 'Waiting to be contacted after form-fill',
  list2 = 'Moving on to a competitor',
  list3 = 'Bouncing around to different reps',
  list4 = 'Inconsistent lead nurture',
  list5 = 'Missing handoffs to sales',
  list6 = 'Poor prospect experience',
}) => {
  return (
    <>
      <div className="grid gap-6">
        {paraChild ? (
          paraChild
        ) : (
          <p className="text-sm font-medium text-[#0b3558c0] bg-gray-200/80 h-fit w-fit px-3 py-1 grid place-items-center rounded-full">
            The Old Way
          </p>
        )}
        <div className="grid gap-5">
          <h2 className="text-4xl">{title}</h2>
          <ul className="grid gap-4 *:font-medium">
            <li
              className="flex items-center gap-2"
              style={{ color: '#0b3558a2' }}
            >
              <img
                src={imgSrc}
                alt="cross img"
                loading="lazy"
                className="w-5"
              />
              {list1}
            </li>
            <li
              className="flex items-center gap-2"
              style={{ color: '#0b3558a2' }}
            >
              <img
                src={imgSrc}
                alt="cross img"
                loading="lazy"
                className="w-5"
              />
              {list2}
            </li>
            <li
              className="flex items-center gap-2"
              style={{ color: '#0b3558a2' }}
            >
              <img
                src={imgSrc}
                alt="cross img"
                loading="lazy"
                className="w-5"
              />
              {list3}
            </li>
            <li
              className="flex items-center gap-2"
              style={{ color: '#0b3558a2' }}
            >
              <img
                src={imgSrc}
                alt="cross img"
                loading="lazy"
                className="w-5"
              />
              {list4}
            </li>
            <li
              className="flex items-center gap-2"
              style={{ color: '#0b3558a2' }}
            >
              <img
                src={imgSrc}
                alt="cross img"
                loading="lazy"
                className="w-5"
              />
              {list5}
            </li>
            <li
              className="flex items-center gap-2"
              style={{ color: '#0b3558a2' }}
            >
              <img
                src={imgSrc}
                alt="cross img"
                loading="lazy"
                className="w-5"
              />
              {list6}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
