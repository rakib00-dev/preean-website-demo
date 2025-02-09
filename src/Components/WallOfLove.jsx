import React from 'react';

function WallOfLove() {
  const data = [
    {
      img: './images/walloflove/4star.svg',
      title: 'Design pro is the best place to find…',
      p: 'Design pro is the best place to find illustrations that fit my apps and websites. There are a lot of free stuff too. Keep up the good work!',
      name: 'Arman Mohamed',
    },
    {
      img: './images/walloflove/5star.svg',
      title: 'Professional and creative solution.',
      p: 'I have been working with Many Pixels for the past 4 months and their service and quality of work has been outstanding. As a startup company great design and illustration work can cost prohibitive, Design pro provides an affordable, professional and creative solution.',
      name: 'Gary Turner',
    },
    {
      img: './images/walloflove/5star.svg',
      title: 'Happy customer for more than 1 year!',
      p: 'I have been a customer for more than 1 year and I am happy with the service! I use them for all of my social media graphics.',
      name: 'Matt D.',
    },
    {
      img: './images/walloflove/4star.svg',
      title: 'Fantastic design service',
      p: "I am extremely pleased by the collaboration. I've been working for more than a vear with them now and we love their designs. They reply fast, and understand our needs and ideas, which they turn into eye-popping graphics.",
      name: 'Charlie GM',
    },
    {
      img: './images/walloflove/4star.svg',
      title: "It's worth every penny",
      p: "I've been a designer for 8 years and Design pro allows me to be more of a creative director which I love. I don't think I could go back to not having a subscription, it's worth every penny and frees up my time to focus on growing my business.",
      name: 'Laura Elizabeth',
    },
    {
      img: './images/walloflove/4star.svg',
      title: 'We really enjoy their quality',
      p: 'We are using ManyPixels for quite a long time now and we really enjoy their quality!',
      name: 'Flowdee',
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl md:mt-16 md:pt-10 bg-white  ">
      <div className="flex m-auto justify-center items-center flex-col w-full gap-4 ">
        <div
          className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
        >
          <h1
            className="uppercase font-bold text-[.85rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            wall of love{' '}
          </h1>
          <h2
            className={`font-extrabold text-[1.85rem] text-center w-full mb-4 leading-8 lg:text-center min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
          >
            Thousands of happy customers
          </h2>
          <p
            className={`text-center text-md px-13 md:w-[26rem] md:px-0 md:text-lg `}
          >
            Don’t take our word for it - see what some of our happy customers
            think about the service.
          </p>
        </div>

        {/* slide container */}

        <div className="mx-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* <Slider {...settings}> */}
          {data.map((e, i) => (
            <div
              key={i}
              className="flex top-0 justify-center items-start w-full h-[400px] flex-col bg-gray-100 p-7  pt-0 text-center mb-5 rounded-lg gap-2 leading-10"
            >
              <img src={e.img} alt="" loading="lazy" className="w-32" />

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-extrabold text-start md:text-start md:text-2xl  ">
                  {e.title}
                </h3>
                <p className="text-md leading-6 text-start md:text-start">
                  {e.p}
                </p>
                <p className="text-md font-bold text-start md:text-start">
                  {' '}
                  {e.name}
                </p>
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </section>
  );
}

export default WallOfLove;
