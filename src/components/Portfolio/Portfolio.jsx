import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Abisha from "../../img/abisha.png";
import Groundix from "../../img/groundix.png";
import Groundis from "../../img/groundis.png";
import { themeContext } from "../../Context";
import Abi from "../../img/abi.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <img src={Abisha} alt="" />
        </SwiperSlide>
        
          <SwiperSlide>
            <img src={Groundix} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Abi} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Groundis} alt="" />
          </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
