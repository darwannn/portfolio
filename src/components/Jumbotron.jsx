import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaFacebookMessenger,
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

const Jumbotron = () => {
  const jumbotronRef = useRef(null);

  useEffect(() => {
    const jumbotron = jumbotronRef.current;
    const handleMouseMove = (e) => {
      const { offsetX, offsetY } = e;
      const { offsetWidth, offsetHeight } = jumbotron;
      const moveX = (offsetX / offsetWidth) * 8;
      const moveY = (offsetY / offsetHeight) * 8;
      jumbotron.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    if (jumbotron) {
      jumbotron.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (jumbotron) {
        jumbotron.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #E6F2FE,#ffffff)",
      }}
    >
      <div
        ref={jumbotronRef}
        id="jumbotron"
        className=" transition-all ease-linear relative flex justify-center items-center h-screen px-5 text-center py-96 lg:py-0 xl:py-0 lg:text-left xl:text-left"
      >
        <div className="w-full m-0 xl:w-3/4 lg:ml-24 lg:-mt-24 xl:-ml-24 xl:-mt-24">
          <div className="flex flex-col-reverse lg:flex-row xl:flex-row relative z-50">
            <div className="flex flex-row lg:flex-col xl:flex-col justify-center mt-10 lg:m-0 xl:m-0 gap-6 text-3xl">
              <a
                href="https://www.messenger.com/t/100083350730989"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookMessenger className="text-primary-500 hover:text-[#1d4dab] transition-all duration-200" />
              </a>
              <a href="tel:09395372592">
                <FaPhone className="text-primary-500  hover:text-[#1d4dab] transition-all duration-200" />
              </a>
              <a href="mailto:ramos.darwin.sanluis@gmail.com">
                <FaEnvelope className="text-primary-500  hover:text-[#1d4dab] transition-all duration-200" />
              </a>
              <a
                href="https://github.com/darwannn"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-primary-500  hover:text-[#1d4dab] transition-all duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/darwannn/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="text-primary-500  hover:text-[#1d4dab] transition-all duration-200" />
              </a>
            </div>

            <div className="flex-1 lg:ml-8 xl:ml-8">
              <div className="text-3xl leading-none">&lt;Hello World/&gt;</div>
              <div className="text-7xl md:text-8xl font-bold leading-none text-primary-900">
                DARWIN RAMOS
              </div>
              <div className="mt-2 mb-4 text-2xl">
                A recent graduate of BS in Information Technology, pursuing a career as a full-stack web
                developer.
              </div>
              
              <Link
                to={"/resume"}
                target="_blank"
                className="btn rounded-md px-10 py-2 w-40 bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all duration-200"
              >
                RESUME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
