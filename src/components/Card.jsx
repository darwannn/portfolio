import React, { useState } from "react";
import { FaChevronRight, FaGithub, FaImages } from "react-icons/fa";
function Card({
  cardImage,
  title,
  description,
  stack,
  webLink,
  githubLink,
  openEvent,
  images,
  setItems,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="bg-white rounded-xl box-shadow p-2">
      <div
        className="w-full relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isHovering && (
          <div className="">
            <div className="w-full h-full z-10 absolute rounded-lg bg-black opacity-30"></div>
            <div className="w-full h-full flex inset-center justify-center items-center text-white z-20">
              <button
                onClick={() => {
                  openEvent(images);
                }}
              >
                <FaImages className="m-1 text-2xl" />
              </button>

              <a href={githubLink} target="_blank" rel="noreferrer">
                <FaGithub className="m-1 text-2xl" />
              </a>
            </div>
          </div>
        )}
        <img
          className="w-full h-full z-0 rounded-lg"
          src={cardImage}
          alt={title}
        />
      </div>
      <div className="px-6 py-4 relative w-full" style={{ minHeight: "250px" }}>
        <div className="font-bold text-3xl mb-1 text-blue ">{title}</div>
        <div className="mb-5">{description}</div>

        {stack.map((text, key) => {
          return (
            <span
              key={key}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1 button-blue"
            >
              {text}
            </span>
          );
        })}

        {webLink !== "" && (
          <a
            href={webLink}
            target="_blank"
            className="flex  absolute bottom-0 right-0 px-6 py-4 font-bold text-blue "
            rel="noreferrer"
          >
            Live View
            <FaChevronRight className=" mt-1 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
