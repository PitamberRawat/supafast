import React from "react";
import "./FAQ.css";
import ProblemTitle from "./ProblemTitle";
const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq-container">
        <div className="tools" style={{ marginBottom: "-30px" }}>
          <div className="tools-container">
            <p className="tool-text" style={{ whiteSpace: "pre" }}>
              FAQs
            </p>
          </div>
        </div>
        <ProblemTitle heading="Questions? Answers." />
        <div className="both-faq-container">
          <div
            className="left-faq-container"
            style={{
              flex: "none",
              height: "auto",
              position: "relative",
            }}
          >
            <div className="left-faq">
              <Quescontainer ques="Who’s behind Supafast?" />
            </div>
            <div className="left-faq">
              <Quescontainer ques="Why not hire a full-time designer and developer" />
            </div>
            <div className="left-faq">
              <Quescontainer ques="What if I'm not happy with the results?" />
            </div>
            <div className="left-faq">
              <Quescontainer ques="How quickly will I receive my project?" />
            </div>
            <div className="left-faq">
              <Quescontainer ques="Can I get a refund?" />
            </div>
          </div>
          <div className="right-faq">
            <div className="book-pic-container">
              <div
                style={{
                  position: "absolute",
                  borderRadius: "inherit",
                  inset: "0px",
                }}
              >
                <img
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "inherit",
                    objectPosition: "center center",
                    objectFit: " cover",
                  }}
                  src="https://framerusercontent.com/images/5mFT0LW85niZJOWfI9aS21EDnA.png"
                  alt=""
                />
              </div>
            </div>

            <div className="book-pic-text-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexShrink: "0",
                }}
              >
                <p className="book-para-text">Have more Questions?</p>
                <p className="book-para-text">Book a FREE intro call.</p>
              </div>
              <div className="book-call-btn-div">
                <a
                  href="https://cal.com/namya/15min?date=2024-09-11&month=2024-09"
                  className="book-call-btn"
                >
                  Book an Intro Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

export const Quescontainer = ({ ques }) => {
  return (
    <div className="ques-container">
      <div className="ques-div">
        <div className="ques-ques">
          <p className="ques-text">{ques}</p>
        </div>
        <div className="plus-container">
          <span className="plus">+</span>
        </div>
      </div>
    </div>
  );
};
