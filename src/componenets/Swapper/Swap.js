import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


function Swap(props) {
  return (
    <div>
        <h1 className='font-bold text-base ml-8 mt-10 lg:text-xl lg:mt-16 lg:ml-28 xl:ml-40 md:ml-20 sm:ml-16'>Browse by make</h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={22}

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
       navigation={true} modules={[Navigation]}
        className="mySwiper xl:mt-3 lg:mt-4 md:mt-2 sm:mt-3 mt-2"
      >
        <SwiperSlide>
            <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://resources.turo.com/f/81934/2999x2000/226d4226db/small-business-hero.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg  lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Tesla</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Tesla</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Lamborghini</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Nissan</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://slingadventures.com/wp-content/uploads/turo-car-rental.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Toyota</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://www.robomarkets.com/blog/wp-content/uploads/2022/02/1-turo.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>BMW</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://www.gannett-cdn.com/-mm-/af75a4a62d29af0189a147a6a66d8d1b18073da9/c=0-104-2048-1261/local/-/media/2017/09/05/USATODAY/USATODAY/636402256372140344-turo1.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Ford</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Jeep</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://media.wired.com/photos/5955b2d9ad90646d424bb3c6/master/pass/Outback2.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Parado</h1>
            </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='hover:text-sky-700 rounded-lg'>
              <a href="#">
            <img src="https://www.tourismpei.com/search/assets/images/common/14553-1648751377.jpg" className='xl:-mt-9 xl:h-48 object-cover rounded-lg lg:h-44 lg:-mt-2 md:h-40 md:-mt-7 sm:h-48 sm:-mt-2 h-48' alt="" />
            <h1 className='xl:relative xl:-bottom-2 xl:font-bold lg:mt-1 md:text-base md:mt-2 sm:mt-1'>Shivaro</h1>
            </a>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Swap