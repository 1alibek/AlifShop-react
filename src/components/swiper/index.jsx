import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import swiper1 from "../../assets/img/swiper1.png";
import swiper2 from "../../assets/img/swiper2.png";
import swiper3 from "../../assets/img/swiper3.png";
import swiper4 from "../../assets/img/swiper4.png";
const MyCarousel = () => {
  return (
    <Carousel
       autoPlay={true} 
      infiniteLoop={true} 
      interval={2000} 
      showThumbs={false}
      showStatus={false}  className="mt-8">
      <div>
        <img src={swiper1} alt="Slide 1" />
      </div>
      <div>
        <img src={swiper2} alt="Slide 2" />
      </div>
      <div>
        <img src={swiper3} alt="Slide 3" />
      </div>
      <div>
        <img src={swiper4} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;
