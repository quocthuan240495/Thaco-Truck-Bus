import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Categories.css"
export default function Categories() {

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="banner-section">
      <div className="mainContainer">
        <Slider {...settings}>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/icn_KIAlogo.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/icn_logofuso.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/icn_sinotruck.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/Icn_somiromooc.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/Icn_xechuyendung.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/icn-foton.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/icnthacotruck.png")} alt="" />
              {/* <div className="inner-text">
                <h4>Kid’s</h4>
              </div> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
