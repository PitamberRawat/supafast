import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-container">
        <div className="img-container">
          <div
            style={{
              position: "absolute",
              borderRadius: "inherit",
              inset: "0",
            }}
          >
            <img
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center center",
                objectFit: "cover",
              }}
              src="https://framerusercontent.com/images/9HXlBhPTlnwGFMLODp1jSqEVFc.png?scale-down-to=2048"
              alt=""
            />
          </div>
        </div>
        <div className="tools" style={{ marginBottom: "-30px" }}>
          <div className="tools-container">
            <p className="tool-text" style={{ whiteSpace: "pre" }}>
              Pricing
            </p>
          </div>
        </div>
        <div className="header-Psection ">
          <h3 className="problem-text" style={{ color: "black" }}>
            Ready to Supafast
          </h3>
          <h3
            className="problem-text"
            style={{ marginTop: "-20px", color: "black" }}
          >
            your Conversions?
          </h3>
        </div>

        <div className="card-container">
          <div className="cards">
            <div className="left-card">
              <div className="top-section">
                <div className="start-book-container">
                  <div className="para-start-div">
                    <p className="para-start">Starting at</p>
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
                      Perfect for single, high-impact, conversion-focused
                      landing page.
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
                          <p className="cofounder-name">CEO at Rosebud</p>
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
            <div className="left-card" style={{ backgroundColor: "black" }}>
              <div className="top-section">
                <div className="start-book-container">
                  <div
                    className="para-start-div"
                    style={{
                      backgroundColor: "#221f1f",
                    }}
                  >
                    <p className="para-start">Retainer</p>
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
                    <p className="price" style={{ color: "white" }}>
                      $4497/mo
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
                    <p className="price-para-1">Pause / Cancel anytime</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      flexShrink: "0",
                    }}
                  >
                    <p className="price-para-2" style={{ color: "white" }}>
                      Ideal for those who need an ongoing design support.
                    </p>
                  </div>
                </div>

                <div
                  className="review-container"
                  style={{ backgroundColor: "black", borderColor: "#d8d4d4" }}
                >
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
                          src="https://framerusercontent.com/images/QmGdU5RCkq1q6p57ONYMNx5A.png"
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
                          <p
                            style={{ color: "white" }}
                            className="cofounder-name"
                          >
                            Harsh Patel
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
                          <p
                            style={{ color: "white" }}
                            className="cofounder-name"
                          >
                            Founder at Macro
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "white" }} className="excellent-p">
                    Phenomenal, fast, great designs.
                  </p>
                </div>

                <a
                  href="https://cal.com/namya/15min?date=2024-09-11&month=2024-09"
                  className="btn-anchor"
                  style={{ backgroundColor: "white" }}
                >
                  <p className="btn-secure-para" style={{ color: "black" }}>
                    Secure your Oct Spot{" "}
                  </p>
                  <span className="arrow-right" style={{ color: "black" }}>
                    →
                  </span>
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
                  <p style={{ color: "white" }} className="feature-text">
                    Features:
                  </p>
                </div>

                <div className="feature-points-div">
                  <Pointdiv flag="true" point="Full service" />
                  <Pointdiv flag={true} point="Full team access" />
                  <Pointdiv flag={true} point="Updates every 48 hours" />
                  <Pointdiv flag={true} point="Weekly progress meetings" />
                  <Pointdiv flag={true} point="Expert project management" />
                  <Pointdiv
                    flag={true}
                    point="Async + Slack + Loom + Meetings"
                  />
                  <Pointdiv flag={true} point="60 hours work per month" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

export const Pointdiv = ({ point, flag }) => {
  return (
    <div className="point-div">
      <p className="bullet-point" style={{ color: flag ? "white" : "black" }}>
        •
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flexShrink: "0",
        }}
      >
        <p className="point-text" style={{ color: flag ? "white" : "black" }}>
          {point}
        </p>
      </div>
    </div>
  );
};
