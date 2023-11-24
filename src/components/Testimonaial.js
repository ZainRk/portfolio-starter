import React from "react";
import "./Test.css";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioPic6 from "../img/profile6.jpg";
import PortfolioPic2 from "../img/profile2.jpg";
import PortfolioPic3 from "../img/profile3.jpg";
import PortfolioPic4 from "../img/profile4.jpg";
import PortfolioPic5 from "../img/profile5.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
const Testimonaial = () => {
  const clients = [
    {
      img: PortfolioPic6,
      review:
        "The second paragraph has been written to describe the second version of the program, its main features, and how it improved upon the previous version.",
    },
    {
      img: PortfolioPic2,
      review:
        "I have been using this product for a few weeks now and I have to say it is one",
    },
    {
      img: PortfolioPic3,
      review:
        "I have been using this product for a few weeks now and I have to say it is one",
    },
    {
      img: PortfolioPic4,
      review:
        "I have been using this product for a few weeks now and I have to say it is one",
    },
    {
      img: PortfolioPic5,
      review:
        "I have been using this product for a few weeks now and I have to say it is one",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonaial;
