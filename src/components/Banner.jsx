import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Banner = ({ text, image, bannerRef, inView }) => {
  const location = useLocation();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView && imageRef.current) {
      imageRef.current.style.paddingBottom = `${scrollPosition / 3}px`;
    }
  }, [inView, scrollPosition]);

  useEffect(() => {
    if (inView && textRef.current && containerRef.current) {
      textRef.current.style.transform = `translateY(${
        containerRef.current.getBoundingClientRect().top - 83 / 1.5
      }px)`;
    }
  }, [inView, scrollPosition]);

  return (
    <div className="relative select-none" ref={containerRef}>
      {image && (
        <img
          src={image}
          alt="Darwin"
          ref={imageRef}
          className={`pointer-events-none inset-center absolute z-20 w-[80%] sm:w-[70%] md:w-[600px] pt-[420px] md:pt-[200px] ${
            imageLoaded ? "visible" : "invisible"
          }`}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
      )}
      <div
        ref={bannerRef}
        className="relative overflow-hidden h-[400px] flex  justify-center items-center bg-primary-100"
      >
        <div
          className={`font-bold leading-tight text-primary-900 uppercase z-10 text-[17vw] transition-all ease-linear duration-100 ${
            location.pathname === "/" && "translate-y-72"
          }`}
          ref={textRef}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Banner;
