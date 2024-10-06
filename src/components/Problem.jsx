import React from "react";
import "./Problem.css";

const Problem = ({ heading, para, svg, flag }) => {
  return (
    <div className="problem-div">
      {flag ? (
        <>
          <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
            <img style={{ height: "100px" }} src={svg} alt="" />
          </div>
          <div className="text-section">
            <div className="text-divvv">
              <p
                className=" text-section-heading"
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
        </>
      ) : (
        <>
          {svg}
          <div className="text-section">
            <div className="text-divvv">
              <p
                className="text-section-heading"
                style={{
                  fontSize: "18px",
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
        </>
      )}
    </div>
  );
};

export default Problem;
