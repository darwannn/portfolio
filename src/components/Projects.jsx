import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  slvisualsData,
  resistorCalculatorData,
  aralinkData,
  pasahelpData,
  apexLegendsMapRotationData,
  snackwiseData,
  sagipData,
  // theNeoArchitecstData,
} from "../utils/data";
import Banner from "./Banner";
import Card from "./Card";

function Projects() {
  return (
    <div id="projects">
      <Banner text="Projects" position="50% 180%" />
      <div className=" relative -mt-16 z-50">
        <Swiper
          // onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={25}
          //  pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card data={slvisualsData} />
          </SwiperSlide>

          <SwiperSlide>
            <Card data={resistorCalculatorData} />
          </SwiperSlide>

          <SwiperSlide>
            <Card data={aralinkData} />
          </SwiperSlide>

          <SwiperSlide>
            <Card data={pasahelpData} />
          </SwiperSlide>

          <SwiperSlide>
            <Card data={apexLegendsMapRotationData} />
          </SwiperSlide>

          <SwiperSlide>
            <Card data={snackwiseData} />
          </SwiperSlide>

          <SwiperSlide>
            <Card data={sagipData} />
          </SwiperSlide>

          {/* <SwiperSlide>
            <Card data={theNeoArchitecstData} />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
