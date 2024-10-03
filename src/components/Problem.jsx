import React from "react";
import "./Problem.css";

const Problem = ({ heading, para, svg, flag }) => {
  return (
    <div className="problem-div">
      <div
        style={{
          imageRendering: "pixelated",
          flexShrink: "0",
          fill: "rgba(0,0,0,1)",
          color: "rgba(0,0,0,1)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "inherit",
          }}
        >
          <svg style={{ width: "100%", height: "100%" }}>
            <use href={svg}></use>
          </svg>
        </div>
      </div>
      <div className="text-section">
        <div className="text-divvv">
          <p
            className="text-section-heading"
            style={{
              fontSize: flag ? "40px" : "18px",
              // whiteSpace: "pre",
              textAlign: "center",
            }}
          >
            {heading}
          </p>
        </div>
        <div className="text-divvv">
          <p className="text-section-para">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
