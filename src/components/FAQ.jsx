import React, { useState } from "react";
import "./FAQ.css";
import ProblemTitle from "./ProblemTitle";
const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You can track your order using the tracking link in your confirmation email.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries around the world.",
    },
  ];

  return (
    <div className="faq" id="faq">
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
            {faqs.map((faq, index) => (
              <div className="left-faq">
                <Quescontainer
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              </div>
            ))}
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

export const Quescontainer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="faqques-container">
      <div className="question-container" onClick={toggleAnswer}>
        <h3 className="question">{question}</h3>
        <div className="plus-container">
          <span className="toggle-button">{isOpen ? "❌" : "+"}</span>
        </div>
      </div>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

{
  /* <div className="ques-container">
      <div className="ques-div">
        <div className="ques-ques">
          <p className="ques-text">{ques}</p>
        </div>
        <div className="plus-container">
          <span className="plus">+</span>
        </div>
      </div>
    </div> */
}
