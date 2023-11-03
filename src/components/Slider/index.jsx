import React from "react";
import PropTypes from "prop-types";
import { Carousel, Typography } from "@material-tailwind/react";
import slide1 from "../../assets/slide1.png";
import slide3 from "../../assets/slide3.png";
import slide2 from "../../assets/slide2.png";

Slider.propTypes = {};

function Slider(props) {
  const carouTypo = () => {
    return (
      <div className="absolute top-[72%] left-[26%] w-[450px]">
        <Typography variant="h1" className="white text-[32px]">
          Welcome to XXX
        </Typography>
        <Typography variant="paragraph" className="text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          blandit nisl.
        </Typography>
      </div>
    );
  };
  return (
    <div className="grid col-start-6 col-end-13 h-screen">
      <Carousel
        className="bg-primary bg-no-repeat border border-transparent rounded-l-[120px]"
        // style={{ backgroundImage: `url(${Rectangle304})` }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute top-[92%] left-[50%] z-50 flex -translate-x-1/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "bg-white w-10 h-2"
                    : "bg-white/50 w-2 h-2"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        prevArrow={() => {}}
        nextArrow={() => {}}
        autoplay
        loop
      >
        <div className="">
          <img
            src={slide1}
            alt=""
            className="w-[75%] relative left-[16%] top-[29px]"
          />
          {carouTypo()}
        </div>
        <div>
          <img
            src={slide3}
            alt=""
            className="relative w-[72%] top-[78px] left-[19%]"
          />
          {carouTypo()}
        </div>
        <div>
          <img
            src={slide2}
            alt=""
            className="relative w-[61%] top-[87px] left-[16%]"
          />
          {carouTypo()}
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
