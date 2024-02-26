import React, { useCallback, useRef } from "react";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import { FaChevronRight } from "react-icons/fa";

function Card({ data }) {
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  return (
    <>
      <div className="bg-white rounded-xl box-shadow p-2 m-3">
        <div className="w-full relative cursor-pointer overflow-hidden">
          {/* <div className={`${isHovering?" opacity-100":" opacity-100"} transition-all duration-200` }>
            <div className="w-full h-full z-10 absolute rounded-lg "
            style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .3) 100%)"}}
            ></div>
            <div className="w-full h-full flex inset-center justify-end items-end text-white z-20 p-2">
              <button
                onClick={()=> lightGallery.current.openGallery()}
              >
                <FaImages className="m-1 text-2xl" />
              </button>

              <a href={githubLink} target="_blank" rel="noreferrer">
                <FaGithub className="m-1 text-2xl" />
              </a>
            </div>
          </div> */}

          <img
            className="w-full h-full z-0 rounded-lg hover:scale-105 transition-all duration-200"
            src={data.cardImage}
            alt={data.title}
            onClick={() => data.images && lightGallery.current.openGallery()}
          />
        </div>
        <div
          className="px-6 py-4 relative w-full"
          style={{ minHeight: "250px" }}
        >
          <div className="font-bold text-3xl mb-1 text-blue ">{data.title}</div>
          <div className="mb-5">{data.description}</div>

          {data.stack.map((text, key) => {
            return (
              <span
                key={key}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-1 button-blue"
              >
                {text}
              </span>
            );
          })}

          {data.webLink !== "" && (
            <a
              href={data.webLink}
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

      <LightGallery
        dynamic
        dynamicEl={data.images}
        onInit={onInit}
        plugins={[lgZoom, lgThumbnail]}
      ></LightGallery>
    </>
  );
}

export default Card;
