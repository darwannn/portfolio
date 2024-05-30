import React from "react";
import { useInView } from "react-intersection-observer";

import Banner from "../components/Banner";
import meImage from "../assets/img/me.png";
import tailwindIcon from "../assets/img/ico/TailwindCSS-Dark.svg";
import reactIcon from "../assets/img/ico/React-Dark.svg";
import expressIcon from "../assets/img/ico/ExpressJS-Dark.svg";
import mongotIcon from "../assets/img/ico/MongoDB.svg";
import laravelIcon from "../assets/img/ico/Laravel-Dark.svg";
import mySQLIcon from "../assets/img/ico/MySQL-Dark.svg";

const About = ({ standalone }) => {
  const [bannerRef, bannerInView] = useInView();

  return (
    <>
      <div id="about" className="mb-5">
        <Banner
          text={"About"}
          image={standalone ? meImage : meImage}
          bannerRef={bannerRef}
          inView={bannerInView}
        />
        <div
          className={`flex justify-center relative   z-50 ${
            standalone ? "mt-20" : "-mt-10"
          }`}
        >
          <div className="w-full mb-10 mx-10 p-10 md:p-32 bg-white box-shadow rounded-2xl">
            <div className="text-2xl font-bold mb-3">Hey There! 👋</div>
            <div className="md:ml-10">
              My name is Darwin Ramos, and I have an experience in creating
              projects across various platform. These include web application
              using JS and PHP, Java Swing desktop application, Android
              application using Android Studio, desktop game with Unity, and
              Arduino Uno microcontroller projects.
              <br />
              <br />
              Among all the platforms, web development has captivated me the
              most. And I am currently learning React, Tailwind, Express to
              further enhance my skills.
            </div>
            {/* <div className="relative  h-10 mt-20">
              <hr className="w-3/4 bg-black absolute inset-center" />
              <div className=" absolute inset-center  text-2xl font-bold  text-center bg-white px-2 wrap">
                Tech Stack
              </div>
            </div> */}
            <div className="text-2xl font-bold mb-3 mt-10">Tech Stack 💻</div>
            <div className="flex justify-center md:justify-start flex-wrap gap-3  ">
              <img
                src={tailwindIcon}
                alt=""
                className="h-24 hover:-translate-y-1 transition-all duration-200"
              />
              <img
                src={reactIcon}
                alt=""
                className="h-24 hover:-translate-y-1 transition-all duration-200"
              />
              <img
                src={expressIcon}
                alt=""
                className="h-24 hover:-translate-y-1 transition-all duration-200"
              />
              <img
                src={laravelIcon}
                alt=""
                className="h-24 hover:-translate-y-1 transition-all duration-200"
              />
              <img
                src={mySQLIcon}
                alt=""
                className="h-24 hover:-translate-y-1 transition-all duration-200"
              />
              <img
                src={mongotIcon}
                alt=""
                className="h-24 hover:-translate-y-1 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
