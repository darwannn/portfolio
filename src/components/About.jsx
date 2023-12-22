import React from "react";
import Banner from "./Banner";
import meImage from "../assets/img/me.png";
import tailwindIcon from "../assets/img/ico/TailwindCSS-Dark.svg";
import reactIcon from "../assets/img/ico/React-Dark.svg";
import expressIcon from "../assets/img/ico/ExpressJS-Dark.svg";
import mongotIcon from "../assets/img/ico/MongoDB.svg";

import bootstrapIcon from "../assets/img/ico/Bootstrap.svg";
import phpIcon from "../assets/img/ico/PHP-Dark.svg";
import mySQLIcon from "../assets/img/ico/MySQL-Dark.svg";

function About() {
 
  return (
    <div id="about">
      <Banner text={"About"} image={meImage} position="50% 60%"  scrollStart={0} />

      <div className="flex justify-center relative  -mt-16 z-50" >
        <div className="w-full mb-10 mx-10 p-10 md:p-20 bg-white box-shadow rounded-2xl">
          <div className="text-2xl font-bold mb-3">Hey There! 👋</div>
          {/* <hr className="mt-3 mb-10"/> */}
          <div className="md:ml-10">
            My name is Darwin Ramos, and I have an experience in creating
            projects across various platform. These include web application using vanilla JS and PHP, Java Swing desktop application, Android
            application using Android Studio, desktop game with Unity, and Arduino Uno microcontroller projects.
            <br />
            <br />
            Among all the platforms, web development has captivated me the most.
            And I am currently learning React, Tailwind, Express, and MongoDB to
            further enhance my skills.
          </div>
      
          <div className="relative  h-10 mt-20">
            <hr className="w-3/4 bg-black absolute inset-center" />
            <div className=" absolute inset-center  text-2xl font-bold mb-3 text-center bg-white px-2 wrap">
             Tech Stack 
            </div>
          </div>
         
          <div className="flex flex-wrap gap-3  justify-center  mt-10 "> 
            <img src={bootstrapIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
            <img src={tailwindIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
            <img src={reactIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
            <img src={phpIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
            <img src={expressIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
            <img src={mySQLIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
            <img src={mongotIcon} alt="" className="h-20 hover:-translate-y-1 transition-all duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
