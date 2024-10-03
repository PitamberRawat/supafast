import React, { useEffect, useState } from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BrandContainer from "./BrandContainer";
import Brand from "./Brand";

const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update width on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add event listener on component mount and remove it on unmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <>
      <div className="service">
        <div className="service-container">
          <div className="cont">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div className="service-heading-container">
                <p className="service-text">Services</p>
              </div>

              <div>
                <h3 className="head3">You name it, we</h3>
                <h3 className="head3">ship it supafast.</h3>
              </div>
            </div>

            <div className="development">
              <div className="development-container">
                <Development devName="Copywriting" />
                <Development devName="Branding" />
                <Development devName="Logos & Icons" />
                <Development devName="Landing pages" />
                <Development devName="Creative strategy" />
                <Development devName="Websites" />
                <Development devName="Custom Illustrations/Graphics" />
                <Development devName="Web Apps" />
                <Development devName="Mobile Apps" />
                <Development devName="Pitch decks" />
                <Development devName="Social media assests" />
                <Development devName="Email templates" />
                <Development devName="CMS" />
                <Development devName="Framer/Webflow/React Development" />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "",
            width: `${
              windowWidth > 1000
                ? "1000px"
                : windowWidth > 800
                ? "740px"
                : windowWidth > 600
                ? "380px"
                : "350px"
            }`,

            // height: "800px",
            marginTop: "15px",
            marginBottom: "12px",
          }}
        >
          <Swiper
            slidesPerView={windowWidth > 1000 ? 2 : 1}
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  margin: "10px",
                }}
                src="https://framerusercontent.com/images/lA8qW9YBzUvrRQbNlaeTRIg.png?scale-down-to=512"
                alt=""
              />
              <p className="slide-name">AI Powered Legal Tech</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  margin: "10px",
                }}
                src="https://framerusercontent.com/images/hPwTqceqqbBQAHYfhbJnVQlAY.png?scale-down-to=1024"
                alt=""
              />
              <p className="slide-name">Web Development Agency</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  margin: "10px",
                }}
                src="https://framerusercontent.com/images/XGeDIvo1lb8buwXeAlSuDF0yXM0.png?scale-down-to=512"
                alt=""
              />
              <p className="slide-name">
                Sales and Marketing Operations Agency
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  margin: "10px",
                }}
                src="https://framerusercontent.com/images/ghxkdrtVlTYVs5TqQVRUufskSE.png?scale-down-to=1024"
                alt=""
              />
              <p className="slide-name">AI/RegTech</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                  margin: "10px",
                }}
                src="https://framerusercontent.com/images/JDE1ryWpqIJmSRL6axN9hZtUb0g.png?scale-down-to=1024"
                alt=""
              />
              <p className="slide-name">No-Code HealthTech Platform</p>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="tools">
          <div className="tools-container">
            <p className="tool-text">Tools</p>
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
    </>
  );
};

export default Services;

export const Development = ({ devName }) => {
  return (
    <div className="chip">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          outline: "none",
          height: "auto",
          position: "relative",
          whiteSpace: "pre",
          width: "auto",
          flexShrink: "0",
        }}
      >
        <p className="dev-name">{devName}</p>
      </div>
    </div>
  );
};
