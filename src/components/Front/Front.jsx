import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

import "./front.css";
const Front = ({ data, indexNo }) => {
  const screenRef = useRef();

  useEffect(() => {
    screenRef.current.click();
    screenRef.current.focus();
  }, []);

  return (
    <div
      ref={screenRef}
      style={{ backgroundColor: data.bgCode }}
      className={`frontContainer `}
    >
      <div className="gradient_bg"></div>
      <div className="frontContainer_content">
        <div
          className={`frontContainerTextContent ${
            indexNo == 0 ? "firstItem" : ""
          }`}
        >
          <h1 className="container_main_heading">{data.name}</h1>
          <p className="container_main_desc"> {data.content}</p>
        </div>
        {data.multipleImg ? (
          <div className="multipleImg">
            {data.imageArr.map((img) => (
              <img src={img} alt="phoneImg" />
            ))}
          </div>
        ) : (
          <img
            className={`${
              data.image === "/img/explore3.png" ? "smallImg" : ""
            } container_main_img`}
            src={data.image}
            alt="matchinBoxIMg"
          />
        )}
      </div>
    </div>
  );
};

export default Front;
