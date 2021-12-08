import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Lazy } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import 'swiper/modules/lazy/lazy.min.css'

import useWindowSize from "../hooks/useWindowSize";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

const Slider = ({ list,dir }) => {

  const size = useWindowSize();

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Lazy]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      lazy={true}
      spaceBetween={50}
      slidesPerView={ size.width < 769 ? 1 : size.width < 1025 ? 2 : 3 }
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <>
      
      {
        list.map( (img, index) => (
          <SwiperSlide key={ index } >
            <img src={`${dir+img}.webp`} />
        </SwiperSlide>
        ))
      }
      </>
      
      
    </Swiper>
  );
};

export default Slider;
