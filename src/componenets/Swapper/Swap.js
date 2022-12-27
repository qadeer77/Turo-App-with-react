import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


function Swap(props) {
  return (
    <div>
        <h1 className='font-bold text-base ml-4 mt-10 lg:text-xl lg:mt-16 lg:ml-40'>Browse by make</h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={11}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper xl:mt-3"
      >
        <SwiperSlide>
            <div>
            <img src="https://resources.turo.com/f/81934/2999x2000/226d4226db/small-business-hero.jpg" className='xl:-mt-9 xl:h-44 object-cover xl:rounded-lg' alt="" />
            <h1 className='xl:absolute xl:bottom-1 xl:font-bold'>Tesla</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swap