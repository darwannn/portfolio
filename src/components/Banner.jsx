import React, { useRef, useEffect } from "react";

function Banner({ text, image, scrollStart, position }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const scrollPosition = (scrollStart) => {
      let scrollValue = window.scrollY;
      if (scrollValue >= scrollStart) {
        return scrollValue - scrollStart;
      }
      return 0;
    };

    const handleScroll = () => {
      if (imageRef.current && window.scrollY <= 800) {
        imageRef.current.style.paddingBottom = `${
          scrollPosition(scrollStart - 100) / 2
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrollStart]);

  return (
    <div className="relative select-none">
      {image && (
        <img
          src={image}
          alt="Darwin"
          ref={imageRef}
          className="inset-center absolute z-20 w-[80%] sm:w-[70%] md:w-[600px] pt-[420px] md:pt-[200px]"
        />
      )}
      <div className="relative overflow-hidden  h-[300px]  flex justify-center items-center background-blue">
        <div
          className="font-bold leading-tight text-blue uppercase z-10 text-[18vw] md:text-[13vw] transition-all"
          style={{ animation: "float 4s ease-in-out infinite" }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Banner;
