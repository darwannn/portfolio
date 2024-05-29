import React, { useCallback, useRef } from "react";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Card = ({ data, blur }) => {
  const lightGallery = useRef(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  return (
    <>
      <div className="relative bg-white rounded-xl box-shadow p-2 m-3 overflow-hidden">
        {blur && (
          <>
            <div className="group">
              <Link
                to={"/projects"}
                className="bg-white w-0 h-0 hover:w-44 hover:h-44 transition-all flex items-center justify-center whitespace-nowrap rounded-full text-primary-900 text-2xl absolute z-20 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  font-bold"
              >
                &lt;See More/&gt;
              </Link>
              <div className="absolute inset-0  bg-primary-100 bg-opacity-50 backdrop-blur-lg  rounded-lg z-10 "></div>
            </div>
          </>
        )}
        <div className="w-full relative cursor-pointer overflow-hidden h-72 bg-primary-900 rounded-lg ">
          <img
            className="w-full h-full z-0 rounded-lg hover:scale-105 transition-all duration-200 object-cover"
            src={data.cardImage}
            alt={data.title}
            onClick={() => data.images && lightGallery.current.openGallery()}
          />
        </div>
        <div
          className="px-6 py-4 relative w-full"
          style={{ minHeight: "250px" }}
        >
          <div className="font-bold text-3xl mb-1 text-primary-900 ">
            {data.title}
          </div>
          <div className="mb-5">{data.description}</div>

          {data.stack.map((text, key) => {
            return (
              <span
                key={key}
                className="inline-block  bg-primary-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mt-1 bg-bli"
              >
                {text}
              </span>
            );
          })}

          {data.webLink !== "" && (
            <a
              href={data.webLink}
              target="_blank"
              className="flex  absolute bottom-0 right-0 px-6 py-4 font-bold text-primary-900  group "
              rel="noreferrer"
            >
              Live View
              <FaChevronRight className=" mt-1 ml-0.5 group-hover:translate-x-1 transition-all" />
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
};

export default Card;
