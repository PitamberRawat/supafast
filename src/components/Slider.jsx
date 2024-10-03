import React, { useEffect, useState } from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
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

        height: "550px",
        // margin: "100px",
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
            src="https://framerusercontent.com/images/rOhBmmQQ5OcWfZhAU6Lyz5RYpw.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">International Payment Solutions</p>
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
            src="https://framerusercontent.com/images/P9tbhyvJqs5tqYUWjMPQnApXBe0.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">Customer Relationship Management</p>
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
            src="https://framerusercontent.com/images/8Sp4OaLF3PWukaFpQDrQeHNeXdE.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">Investment Project Page</p>
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
            src="https://framerusercontent.com/images/MUSob9q3oySgi42lEyPtsY8dBGU.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">Cybersecurity</p>
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
            src="https://framerusercontent.com/images/pqi9uxEXeJY60Rz5lNulr6mVJU.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">Healthcare Payment Solutions</p>
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
            src="https://framerusercontent.com/images/LBm6TPEIy9fJyPYFIGebi3fAA.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">Mental Health Tech</p>
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
            src="https://framerusercontent.com/images/g5oGZLvdqNSySXDIqvAO8cj3X4.png?scale-down-to=1024"
            alt=""
          />
          <p className="slide-name">AI Video Content Creation</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
