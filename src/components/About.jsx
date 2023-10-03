import React /* , {useEffect, useRef}  */ from "react";
import Banner from "./Banner";
import meImage from "./../img/me.png";
import tailwindIcon from "./../img/ico/TailwindCSS-Dark.svg";
import reactIcon from "./../img/ico/React-Dark.svg";
import expressIcon from "./../img/ico/ExpressJS-Dark.svg";
import mongotIcon from "./../img/ico/MongoDB.svg";

import bootstrapIcon from "./../img/ico/Bootstrap.svg";
import phpIcon from "./../img/ico/PHP-Dark.svg";
import mySQLIcon from "./../img/ico/MySQL-Dark.svg";

function About() {
  /*   const imageRef  = useRef(null);
  useEffect(() => { window.addEventListener("scroll", () => {textRef.current.style.paddingLeft = `${scrollPosition(scrollStart)}px`;});}); */
  return (
    <div id="about">
      <Banner text="About" image={meImage} scrollStart="0" position="150" />

      <div className="flex justify-center relative  -mt-16 z-50">
        <div className="w-full mb-10 mx-10 p-10 md:p-20 bg-white box-shadow rounded-2xl">
          <div className="text-2xl font-bold mb-3">Hey There! 👋</div>
          <div className="md:ml-10">
            My name is Darwin Ramos, and I have an experience in creating
            projects across various platform. These include microcontroller
            projects utilizing Arduino, game development with Unity, android
            application using Android Studio, JAVA Swing desktop application,
            and web application using HTML, CSS, SASS, Bootstrap, JavaScript,
            PHP, and MySQL.
            <br />
            <br />
            Among all the platforms, web development has captivated me the most.
            And I am currently learning React, Tailwind, Express, and MongoDB to
            further enhance my skills.
          </div>
          {/* <div className="text-2xl font-bold mt-10 mb-3 text-center">
            Tech Stack
          </div> */}
          <div className="flex flex-wrap gap-3  justify-center  mt-10 ">
            <img src={bootstrapIcon} alt="" className="h-20" />
            <img src={tailwindIcon} alt="" className="h-20" />
            <img src={reactIcon} alt="" className="h-20" />
            <img src={phpIcon} alt="" className="h-20" />
            <img src={expressIcon} alt="" className="h-20" />
            <img src={mySQLIcon} alt="" className="h-20" />
            <img src={mongotIcon} alt="" className="h-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
