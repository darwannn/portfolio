import React, { useCallback, useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

import { Pagination, Navigation } from "swiper";

import apexLegendsMapRotationImage from "./../img/web/apexLegendsMapRotation.png";
import aralinkImage from "./../img/web/aralink.png";
import pasahelpImage from "./../img/web/pasahelp.png";
import aralinkImagresistorCalculatoreImage from "./../img/web/resistorCalculator.png";
import slvisualsImage from "./../img/web/slvisuals.png";
import snackwiseImage from "./../img/web/snackwise.png";
import resistorCalculatorImage from "./../img/web/resistorCalculator.png";
import streamingAppsImage from "./../img/web/streamingApps.png";
import noImage from "./../img/web/noImage.png";

import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

function Projects({ cardImage, title, description, stack, webLink }) {
  const [items, setItems] = useState();
  const aralinkImages = [
    {
      id: "1",
      size: "1400-933",
      src: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
              <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
              <p>Published on November 13, 2018</p>
          </div>`,
    },
    {
      video: {
        source: [
          {
            src: "https://www.lightgalleryjs.com//videos/video1.mp4",
            type: "video/mp4",
          },
        ],
        attributes: { preload: false, controls: true },
      },
      thumb:
        "https://www.lightgalleryjs.com//images/demo/html5-video-poster.jpg",
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                    <p>Description of the slide 2</p>
                </div>`,
    },
    {
      id: "2",
      size: "1400-933",
      src: "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
              <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
              <p>Published on September 14, 2016</p>
          </div>`,
    },
    {
      id: "3",
      size: "1400-932",
      src: "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
      subHtml: `<div class="lightGallery-captions">
              <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
              <p>Published on May 8, 2020</p>
          </div>`,
    },
  ];

  const lightGalleryRef = useRef(null);

  const openGallery = useCallback((images) => {
    setItems(images);
    lightGalleryRef.current.openGallery();
  }, []);

  const onInit = useCallback((detail) => {
    if (detail) {
      lightGalleryRef.current = detail.instance;
    }
  }, []);
  const aralinkStack = ["SASS", "Vanilla JS", "AJAX", "PHP", "Mysql"];
  const apexMapTrackerStack = ["Vanilla JS", "PHP"];
  const pasahelpStack = ["Vanilla JS"];
  const resistorCalculatorStack = ["Vanilla JS"];
  const snackwiseStack = ["Bootstrap", "Vanilla JS", "PHP", "Mysql"];
  const slvisualsStack = ["Vanilla JS", "PHP", "Mysql"];
  const portfolioStack = ["Tailwind", "React", "Express"];
  const sagipStack = ["Tailwind", "React", "Typescript", "Express", "MongoDB"];

  const [swiperRef, setSwiperRef] = useState(null);

  const lightGallery = useRef(null);

  return (
    <div id="projects">
      <LightGallery
        elementClassNames="custom-classname"
        dynamic
        dynamicEl={items}
        onInit={onInit}
        plugins={[lgZoom, lgVideo]}
      ></LightGallery>
      <Banner text="Project" scrollStart="500" position="500" />
      <div className=" relative -mt-16 z-50">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={25}
          /*  pagination={{
            clickable: true,
          }} */
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
          {/* openEvent={openGallery} */}
          {/* <button
            onClick={() => {
             
              openGallery(aralinkImages);
            }}
          >
            Open Gallery
          </button> */}
          <SwiperSlide>
            {" "}
            <Card
              cardImage={slvisualsImage}
              title="SL Visuals"
              description="Portfolio of Architect Christian San Luis"
              stack={slvisualsStack}
              webLink=""
              githubLink="https://github.com/darwannn/sl-visuals"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={resistorCalculatorImage}
              title="Resistor Calculator"
              description="Tool for reading resistor color code values for a 4 band resistor, 5 band resistor, or 6 band resistor"
              stack={resistorCalculatorStack}
              webLink="https://darwannn.github.io/resistor-calculator/"
              githubLink="https://github.com/darwannn/resistor-calculator"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={aralinkImage}
              title="AraLink"
              description="A website where you can compile the video recordings of your classes through embed links"
              stack={aralinkStack}
              webLink=""
              githubLink="https://github.com/darwannn/aralink"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={pasahelpImage}
              title="Pasahelp"
              description="Mega Manila Jeepney Fare Calculator"
              stack={pasahelpStack}
              webLink="https://darwannn.github.io/pasahelp/"
              githubLink="#"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={apexLegendsMapRotationImage}
              title="Apex Legens Map Tracker"
              description="Apex Legends map rotation tracker"
              stack={apexMapTrackerStack}
              webLink=""
              githubLink="https://github.com/darwannn/apex-legends-map-rotation"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={snackwiseImage}
              title="SnackWise"
              description="Web-based online ordering system for SnackWise"
              stack={snackwiseStack}
              webLink=""
              githubLink="https://github.com/darwannn/snackwise-ordering-system"
              images={aralinkImages}
              setItems={setItems}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={noImage}
              title="My Portfolio"
              description="My Portfolio"
              stack={portfolioStack}
              webLink=""
              githubLink="https://github.com/darwannn/portfolio"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Card
              cardImage={noImage}
              title="SAGIP "
              description="Safety Assistance with Geo-Tracking Integration Program"
              stack={sagipStack}
              webLink=""
              githubLink="https://github.com/darwannn/sagip-frontend"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
