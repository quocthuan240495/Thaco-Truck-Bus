import React from "react"
import { Container, Row, Col } from "reactstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Categories.css"
export default function Categories() {

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="banner-section">
      {/* <Container fluid>
        <Row>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("../../images/banner-1.jpg")} alt="" />
              <div className="inner-text">
                <h4>Men’s</h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("../../images/banner-2.jpg")} alt="" />
              <div className="inner-text">
                <h4>Women’s</h4>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
      <div className="mainContainer">
        <Slider {...settings}>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="single-banner">
              <img src={require("../../images/banner-3.jpg")} alt="" />
              <div className="inner-text">
                <h4>Kid’s</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}
