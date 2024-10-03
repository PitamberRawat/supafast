import React from "react";
import "../App.css";

const ProblemTitle = ({ heading, para, flag }) => {
  return (
    <>
      <div
        className="header-Psection "
        style={{ marginBottom: `${flag ? "-45px" : ""}` }}
      >
        <h3 className="problem-text">{heading}</h3>
        {flag ? (
          <h3 className="problem-text" style={{ marginTop: "-24px" }}>
            Conversion-focused design.
          </h3>
        ) : null}
      </div>

      <p className="problem-para">{para}</p>
      {flag ? (
        <p className="problem-para" style={{ marginTop: "-65px" }}>
          Moving beyond surface metrics to emotional impact that turns browsers
          into buyers.
        </p>
      ) : null}
    </>
  );
};

export default ProblemTitle;
