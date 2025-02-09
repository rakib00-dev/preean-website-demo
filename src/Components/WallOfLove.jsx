import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function WallOfLove() {
  return (
    <section className="flex flex-col justify-center items-center mx-auto w-full max-w-7xl md:mt-16 md:pt-10 bg-white overflow-hidden ">
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

        {/* swiper container */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {' '}
              <div className="flex justify-center items-center w-[90%] flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg gap-2 md:flex-row swiper-slide">
                <img
                  src="	https://cdn.prod.website-files.com/63a9cb71c629474…ae334b9/64771ca81ca155824e1c4c08_Group%204818.svg"
                  alt=""
                  loading="lazy"
                  className="w-24"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold ">Fast & Reliable</h3>
                  <p className="text-md ">
                    Get your design back in 1-2 business days.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div className="flex justify-center items-center w-[90%] flex-col bg-gray-100 p-4 py-6 text-center mb-5 rounded-lg gap-2 md:flex-row swiper-slide">
                <img
                  // src="	https://cdn.prod.website-files.com/63a9cb71c629474…ae334b9/64771ca81ca155824e1c4c08_Group%204818.svg"
                  alt=""
                  loading="lazy"
                  className="w-24"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-extrabold ">Fast & Reliable</h3>
                  <p className="text-md ">
                    Get your design back in 1-2 business days.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WallOfLove;
