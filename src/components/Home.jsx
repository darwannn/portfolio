import React from "react";
import {
  FaPhone,
  FaFacebookMessenger,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
function Home() {
  return (
    <div
      id="home"
      className="relative flex justify-center items-center h-screen px-5 text-center py-96 lg:py-0 xl:py-0 lg:text-left xl:text-left"
      style={{ background: "linear-gradient(to bottom, #E6F2FE,#ffffff)" }}
    >
      <div className="w-full m-0  xl:w-3/4 lg:-ml-24 lg:-mt-24 xl:-ml-24 xl:-mt-24">
        <div className="flex flex-col-reverse lg:flex-row xl:flex-row relative z-50">
          <div className="flex flex-row lg:flex-col xl:flex-col justify-center mt-10 lg:m-0 xl:m-0  gap-6 text-3xl">
            <a
              href="https://www.messenger.com/darwannn"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookMessenger className="icon-blue" />
            </a>
            <a href="tel:09395372592">
              <FaPhone className="icon-blue" />
            </a>
            <a href="mailto:darwinsanluis.ramos14@gmail.com">
              <FaEnvelope className="icon-blue" />
            </a>
            <a
              href="https://github.com/darwannn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon-blue" />
            </a>
          </div>

          <div className="flex-1 lg:ml-8 xl:ml-8">
            <div className="text-3xl leading-none">&lt;Hello World/&gt;</div>
            <div className="text-7xl md:text-8xl font-bold leading-none text-blue">
              DARWIN RAMOS
            </div>
            <div className="mt-2 mb-4 text-2xl">
              I am a 4th-year BS Information Technology student at Bulacan State
              University, pursuing a career as a full-stack web developer.
            </div>
            <a
              href="resume"
              target="_blank"
              rel="noreferrer"
              className="btn rounded-md px-10 py-2 w-40 button-blue"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
