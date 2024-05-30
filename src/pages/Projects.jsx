import React from "react";
import { useInView } from "react-intersection-observer";
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
  portfolioData,
  toDoItData,
  theNeoArchitecstData,
} from "../utils/data";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Projects = ({ standalone }) => {
  const [bannerRef, inView] = useInView();
  return (
    <>
      <div id="projects" className="mb-10">
        <Banner text="Projects" bannerRef={bannerRef} inView={inView} />
        <div className=" relative -mt-16 z-50">
          {!standalone ? (
            <div className="mx-5 md:mx-10 mb-12">
              <Swiper
                // onSwiper={setSwiperRef}
                slidesPerView={3}
                spaceBetween={0}
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
                  <Card data={apexLegendsMapRotationData} blur={true} />
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mx-10 xl:mx-10">
              <Card data={slvisualsData} />
              <Card data={resistorCalculatorData} />
              <Card data={aralinkData} />
              <Card data={pasahelpData} />
              <Card data={apexLegendsMapRotationData} />
              <Card data={snackwiseData} />
              <Card data={portfolioData} />
              <Card data={sagipData} />
              <Card data={toDoItData} />
              {/* <Card data={theNeoArchitecstData} /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
