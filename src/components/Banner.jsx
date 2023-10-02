import React, { useRef, useEffect } from "react";

function Banner({ text, image, scrollStart, position }) {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const scrollPosition = (scrollStart) => {
    let scrollValue = window.scrollY;
    if (scrollValue >= scrollStart) {
      return scrollValue - scrollStart;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      textRef.current.style.paddingLeft = `${
        scrollPosition(scrollStart) / 2
      }px`;
      if (window.scrollY <= 800) {
        imageRef.current.style.paddingBottom = `${
          scrollPosition(scrollStart - 100) / 2
        }px`;
      }
      /* if (window.scrollY <= 400) {
        imageRef.current.style.paddingBottom = `${
          scrollPosition(scrollStart - 100) / 2
        }px`;
      } */
    });
  });

  return (
    <div className="relative ">
      {image && (
        <img
          src={image}
          alt="Darwin"
          ref={imageRef}
          className="inset-center absolute z-20 w-[80%] sm:w-[70%] md:w-[600px] pt-[420px] md:pt-[200px]"
        />
      )}
      <div className="relative overflow-hidden background-blue h-[24rem]">
        <div
          className="absolute font-bold leading-tight text-blue uppercase z-10 text-[24rem]"
          ref={textRef}
          style={{ left: `-${position}px` }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Banner;
