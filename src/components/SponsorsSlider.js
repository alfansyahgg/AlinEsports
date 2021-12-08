import React from "react";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/scrollbar/scrollbar.min.css";

// import '../css/sponsors.css';

const SponsorsSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={30} pagination={{
        "clickable": true
      }} className="mySwiper"
    >
        <SwiperSlide><img src="images/sponsors/adhi-1.png" /></SwiperSlide>
        <SwiperSlide><img src="images/sponsors/BG.png" /></SwiperSlide>
        <SwiperSlide><img src="images/sponsors/RKApparel2.png" /></SwiperSlide>
    </Swiper>
  );
};

export default SponsorsSlider;
