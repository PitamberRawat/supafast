import "./App.css";
import Avatar from "./components/Avatar";
import Brand from "./components/Brand";
import BrandContainer from "./components/BrandContainer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Problem from "./components/Problem";
import ProblemTitle from "./components/ProblemTitle";
import Services from "./components/Services";
import Slider from "./components/Slider";

import Star from "./components/Star";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="hero-section">
          <div className="pattern">
            <div className="imgdiv">
              <img
                className="patternImg"
                sizes="100vw"
                srcSet="https://framerusercontent.com/images/L2oTGbAYcb46a7SfWiOStAE7ykk.svg?scale-down-to=512 512w,https://framerusercontent.com/images/L2oTGbAYcb46a7SfWiOStAE7ykk.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/L2oTGbAYcb46a7SfWiOStAE7ykk.svg 1440w"
                src="https://framerusercontent.com/images/L2oTGbAYcb46a7SfWiOStAE7ykk.svg"
                alt=""
              />
            </div>
          </div>

          <div className="logo">
            <div
              class="svgContainer"
              style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}
            >
              <svg style={{ width: "100%", height: "100%" }}>
                <use href="https://withsupafast.com#svg9604681989"></use>
              </svg>
            </div>
          </div>

          <div className="hero-container">
            <div className="top">
              <div className="header-section">
                <div className="sec-container">
                  <div style={{ display: "flex" }}>
                    <Avatar imgUrl="https://senjaio.b-cdn.net/public/avatar/1b9ce75f-5a1b-47af-9c3d-e978707a6862_profpic.jpg?width=60&amp;height=60&amp;format=webp" />
                    <Avatar imgUrl="https://senjaio.b-cdn.net/public/avatar/ba50fd1b-9909-4a1f-9bd3-e1841949b4e1_Headshot.png?width=60&height=60&format=webp" />
                    <Avatar imgUrl="https://senjaio.b-cdn.net/public/media/d34dd908-9b54-4f39-a3b5-4c3ea4c4e1f3_09ac26ac-6cd4-485e-a1a4-d2e623f5eb2b_1680763036320.jpeg?width=60&height=60&format=webp" />
                    <Avatar imgUrl="https://senjaio.b-cdn.net/public/media/c37d1b08-4f20-4226-b889-f447a637861d_59038089-de4c-4864-bfdc-b5b7f6a374d7_1582303022773.jpeg?width=60&height=60&format=webp" />
                    <Avatar imgUrl="https://senjaio.b-cdn.net/public/avatar/6aaee6df-c4ee-474e-bf9d-ae1211eadbe7_IMG_3517.jpeg?width=60&height=60&format=webp" />
                  </div>

                  <div
                    style={{
                      marginLeft: "14px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                      flexDirection: "column",
                    }}
                  >
                    <div className="stars">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "var(--clr-text)",
                      }}
                    >
                      100+ Startup Founders Love Supafast
                    </div>
                  </div>
                </div>

                <div className="headline">
                  <div
                    className="normal-heading"
                    style={{
                      color:
                        "var( --token-08693460-4234-4f36-abdb-ad88f1077ebf)",

                      fontWeight: "700",
                      lineHeight: "110%",
                    }}
                  >
                    High-performance B2B websites that flood your business with
                    ready-to-buy customers.
                  </div>
                </div>

                <div className="para">
                  <p className="paraOne">
                    Design, copy, and development engineered to
                  </p>
                  <p className="paraOne paraTwo" style={{ color: "white" }}>
                    turn browsers into buyers
                    <span
                      style={{
                        color:
                          "var(--token-c366171b-28e0-4d06-8b69-ef8c4c7d29bf, rgb(82, 82, 82))",
                      }}
                    >
                      {" "}
                      and{" "}
                    </span>
                    drive sales on autopilot.
                  </p>
                </div>

                <div className="button-section">
                  <a className="claim-button-top">
                    <div className="btnimgcon">
                      <img
                        height="100%"
                        width="100%"
                        style={{
                          display: "block",
                          objectPosition: "center",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        src="https://framerusercontent.com/images/Oel3kyZZ6WT9S5V7bMa7TxlCP3U.png"
                        alt=""
                      />
                    </div>

                    <div className="claim-text-con">
                      <div>
                        <p className="claim-text">
                          Claim Your Free Strategy Call Now
                        </p>
                      </div>
                    </div>
                  </a>

                  <div
                    style={{
                      width: "400px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        color:
                          " var(--token-c366171b-28e0-4d06-8b69-ef8c4c7d29bf, rgb(82, 82, 82))",
                      }}
                    >
                      Fixed costs. No lock-ins. Clear deliverables.
                    </p>
                  </div>
                </div>

                <div className="logos-container">
                  <div className="section">
                    <ul className="ul">
                      <li>
                        <div className="li-container">
                          <div className="li-y-combinator">
                            <Brand imgUrl="https://framerusercontent.com/images/VeMjxejNWALiBEm37FVdzAxOhKA.png" />
                          </div>
                        </div>
                      </li>

                      <BrandContainer
                        width="px"
                        ar="0.84375 "
                        imgUrl="https://framerusercontent.com/images/sovZmD4SJsQadVKuem8MZgtex1w.png"
                      />

                      <BrandContainer
                        width="70px"
                        imgUrl="https://framerusercontent.com/images/rhOGDNL6iI5dwjVhBTnsag10QI.png"
                      />

                      <BrandContainer
                        width="87px"
                        imgUrl="https://framerusercontent.com/images/0SUSmn1QUW09w6woJhZNkIHW30.png"
                      />

                      <BrandContainer
                        width="80px"
                        imgUrl="https://framerusercontent.com/images/BouC8pyBpkmyq0L70ebleMqNp8.png"
                      />

                      <BrandContainer
                        width="153px"
                        imgUrl="https://framerusercontent.com/images/Jo9QzSoOBGVX9KrhGgexLa6B0g.png"
                      />

                      <BrandContainer
                        width="95px"
                        imgUrl="https://framerusercontent.com/images/REjn1hgs7MxTYoFK09R7FfnPI.png"
                      />

                      <BrandContainer
                        width="131px"
                        imgUrl="https://framerusercontent.com/images/GUG9D2BDs90m0XvyQIw1ucznzSQ.png"
                      />

                      <li>
                        <div className="li-container">
                          <div className="li-y-combinator">
                            <Brand imgUrl="https://framerusercontent.com/images/d0QAgZeotmF1qrFYP6qzZEU9tuw.png" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ alignItems: "flex-start" }}
            className=" header-section work-section"
          >
            <div
              className="arrow-container header-section"
              style={{ alignItems: "flex-start" }}
            >
              <div className="some-recent-work">
                <span className="rotate-text">Some recent work</span>
              </div>

              <div
                name="arrow, hand drawn, scribble, doodle, 10"
                style={{
                  imageRendering: "pixelated",
                  flexShrink: "0",
                  fill: "rgba(0,0,0,1)",
                  color: "rgba(0,0,0,1)",
                }}
                className="framer-2dz9uz"
              >
                <div
                  className="svgContainer"
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "inherit",
                  }}
                >
                  <svg
                    style={{ width: "100%", height: "100%" }}
                    viewBox="0 0 92 92"
                    preserveAspectRatio="none"
                    width="100%"
                    height="100%"
                  >
                    <use href="#svg-1163861069_5874"></use>
                  </svg>
                </div>
              </div>

              <Slider />
            </div>
          </div>

          {/* end */}
        </div>
        <div className="problem-section">
          <div className="problem-container">
            <ProblemTitle
              heading="You don't have a traffic problem... you're failing to convert that traffic into leads."
              para="The REAL challenge is turning clicks into conversions."
            />
            <div className="problem-ques">
              <Problem
                svg="#svg10492782262"
                heading="Lost in the Competition"
                para="In a sea of competitors, it's hard to make your brand stand out when everyone is fighting for attention."
              />
              <Problem
                svg="#svg12690713410"
                heading="Leads not Following"
                para="Struggling to turn site visitors into leads? Your strategies might be missing the mark with your target audience."
              />
              <Problem
                svg="#svg10645988170"
                heading="Customer Conversion Challenges"
                para="Getting clicks is just the start. The real challenge lies in converting those clicks into loyal customers."
              />
            </div>
          </div>
        </div>

        <div className="solution-section s-section">
          <div className="solution-container">
            <ProblemTitle
              heading="The solution:"
              para="Designs that captivate, copy that resonates, and development that converts."
              flag="true"
            />
            <div className="problem-ques">
              <Problem
                svg="#svg8741899787"
                heading="Compelling Copy"
                para="Crafting words that engage, resonate, and ultimately convince your audience to take action."
              />
              <Problem
                svg="#svg12246595340"
                heading="Top-Tier Branding"
                para="Design a brandidentity to standout in a crowded market place."
              />
              <Problem
                svg="#svg9496881610"
                heading="Conversion-Focused Design"
                para="Creating visually appealing designs that are optimized for maximum conversion rates"
              />
            </div>
          </div>
        </div>

        <div className="testimonial-section s-section" style={{ gap: "0px" }}>
          <Testimonial />
        </div>
        <Services />
        <HowItWorks />
        <Pricing />
        <FAQ />
        {/* Footer  */}

        <Footer />

        <div className="launcher">
          <div className="launcher-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32">
              <path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
