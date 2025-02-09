import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function WallOfLove() {
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
            <SwiperSlide className="swiper-slide">hello </SwiperSlide>
            <SwiperSlide className="swiper-slide">hwllo </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WallOfLove;
