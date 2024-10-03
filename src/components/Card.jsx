import React from "react";
import { Pointdiv } from "./Pricing";

const Card = ({ paraStart, flag }) => {
  return (
    <div className="left-card">
      <div className="top-section">
        <div className="start-book-container">
          <div className="para-start-div">
            <p className="para-start">{paraStart}</p>
          </div>
          <div
            className="para-start-div"
            style={{ backgroundColor: "#ffe0e0" }}
          >
            <p className="para-start" style={{ color: "red" }}>
              New Booking for October
            </p>
          </div>
        </div>

        <div className="price-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: "0",
            }}
          >
            <p className="price">$2497</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: "0",
            }}
          >
            <p className="price-para-1">
              Launch your dream site in days, not months.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: "0",
            }}
          >
            <p className="price-para-2">
              Perfect for single, high-impact, conversion-focused landing page.
            </p>
          </div>
        </div>

        <div className="review-container">
          <div className="img-review-div-container">
            <div className="img-review-div">
              <div
                style={{
                  position: "absolute",
                  borderRadius: "inherit",
                  inset: "0",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    objectPosition: "center center",
                  }}
                  src="https://framerusercontent.com/images/RrJRAFZWpfhPTJkIEYdGn8G8ZTo.png"
                  alt=""
                />
              </div>
            </div>
            <div></div>

            <div className="founder-div">
              <div className="outer-cofounder-div">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flexShrink: "0",
                  }}
                >
                  <p className="cofounder-name">Chyrs Bader</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    flexShrink: "0",
                  }}
                >
                  <p className="cofounder-name">Co-Founder & CEO at Rosebud</p>
                </div>
              </div>
            </div>
          </div>
          <p className="excellent-p">
            Excellent, patient, professional, quick.
          </p>
        </div>

        <a
          href="https://cal.com/namya/15min?date=2024-09-11&month=2024-09"
          className="btn-anchor"
        >
          <p className="btn-secure-para">Secure your Oct Spot </p>
          <span className="arrow-right">→</span>
        </a>
      </div>

      <div className="feature-section">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexShrink: "0",
          }}
        >
          <p className="feature-text">Features:</p>
        </div>

        <div className="feature-points-div">
          <Pointdiv point="Copywriting" />
          <Pointdiv point="4 Hero iterations" />
          <Pointdiv point="Kick-off strategy call" />
          <Pointdiv point="Reusable components" />
          <Pointdiv point="Updates every 48 hours" />
          <Pointdiv point="Mobile, Tablet & Desktop layouts" />
        </div>
      </div>
    </div>
  );
};

export default Card;
