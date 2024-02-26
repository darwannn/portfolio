import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

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
import Banner from "../components/Banner";
import Card from "../components/Card";

function Projects({ standalone }) {
  return (
    <>
      <div id="projects">
        <Banner text="Projects" position="50% 180%" />
        <div className=" relative -mt-16 z-50">
          {!standalone ? (
            <div className="mx-10 mb-12">
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
                  <Card data={apexLegendsMapRotationData} />
                </SwiperSlide>

                <SwiperSlide>
                  <Card data={snackwiseData} />
                </SwiperSlide>

                <SwiperSlide>
                  <Card data={sagipData} />
                </SwiperSlide>
              </Swiper>
              <div className="text-center text-xl font-semibold  leading-none m-5 ">
                <Link to={"/projects"}>&lt;See More/&gt;</Link>
              </div>
              {/* <Link
                to={"/projects"}
                className="flex justify-end relative font-bold text-blue mx-2"
              >
                <hr className="w-full bg-black  inset-center" />
                <div className="flex bg-white relative z-10 px-4">
                  See more
                  <FaChevronRight className=" mt-1 ml-1" />
                </div>
              </Link> */}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mx-10 xl:mx-40">
              <Card data={slvisualsData} />
              <Card data={resistorCalculatorData} />
              <Card data={aralinkData} />
              <Card data={pasahelpData} />
              <Card data={apexLegendsMapRotationData} />
              <Card data={snackwiseData} />
              <Card data={sagipData} />
              {/* <Card data={theNeoArchitecstData} /> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
