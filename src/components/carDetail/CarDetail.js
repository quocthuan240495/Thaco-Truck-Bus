import React, { useEffect } from "react";
import "./CarDetail.scss";
import { Row } from "reactstrap";
import Label from "reactstrap/lib/Label";
import ProductImagesSlider from "../product-images-slider";
import { productImages } from "../../images/productDetail"

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

function Header() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <>
      <img src={require("../../images/products/banner_THACOTAI_FUSO_CANTERTF49_tc4_KOHOTLINE.jpeg")} alt="" />
      <Row className="containerHeader">
        <Row className="imgHeader">
          <img src={require("../../images/icons/TF49.png")} alt="" />
        </Row>
        <Label>Mitsubishi Fuso Canter TF4.9 (tải trọng 1.995 tấn) là dòng xe tải trung cao cấp hoàn toàn mới từ Mitsubishi Nhật Bản, được Thaco sản xuất lắp ráp và phân phối độc quyền tại Việt Nam. Mitsubishi Fuso Canter TF4.9 sở hữu các tính năng công nghệ nổi bật nhất trong phân khúc: động cơ Mitsubishi Fuso đạt tiêu chuẩn khí thải Euro 5, hệ thống chống bó cứng phanh ABS và hệ thống phân bổ lực phanh điện tử EBD.</Label>
        <Label>Mitsubishi Fuso Canter TF4.9 linh hoạt đáp ứng nhu cầu chuyên chở của khách hàng với đa dạng thùng tải: Thùng tải lửng, Thùng mui bạt, Thùng tải kín, Thùng đông lạnh, Thùng bán hàng lưu động…</Label>
        <Row className="link-area">
          <a
            href="/"
            onClick={e => {
              let hero = document.getElementById("ngoaithat");
              e.preventDefault();
              hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
              // window.history.pushState("hero", "hero", "/hero");
            }}
          >
            NGOẠI THẤT
          </a>
          <a
            href="/"
            onClick={e => {
              let about = document.getElementById("noithat");
              e.preventDefault();
              about && about.scrollIntoView({ behavior: "smooth", block: "start" });
              // window.history.pushState("about", "about", "/about");
            }}
          >
            NỘI THẤT
          </a>
          <a
            href="/"
            onClick={e => {
              let contact = document.getElementById("thungxe");
              e.preventDefault();
              contact &&
                contact.scrollIntoView({ behavior: "smooth", block: "start" });
              // window.history.pushState("contact", "contact", "/contact");
            }}
          >
            THÙNG XE
          </a>
          <a
            href="/"
            onClick={e => {
              let hero = document.getElementById("khunggam");
              e.preventDefault();
              hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
              // window.history.pushState("hero", "hero", "/hero");
            }}
          >
            KHUNG GẦM
          </a>
          <a
            href="/"
            onClick={e => {
              let about = document.getElementById("dongco");
              e.preventDefault();
              about && about.scrollIntoView({ behavior: "smooth", block: "start" });
              // window.history.pushState("about", "about", "/about");
            }}
          >
            ĐỘNG CƠ
          </a>
          <a
            href="/"
            onClick={e => {
              let contact = document.getElementById("thongsokythuat");
              e.preventDefault();
              contact &&
                contact.scrollIntoView({ behavior: "smooth", block: "start" });
              // window.history.pushState("contact", "contact", "/contact");
            }}
          >
            THÔNG SỐ KỸ THUẬT
          </a>
        </Row>
      </Row>
    </>
  );
}

function Ngoaithat() {
  return (
    <section id="ngoaithat">
      <h1>NGOẠI THẤT</h1>
      <ProductImagesSlider images={productImages} />
    </section>
  );
}

function Noithat() {
  return (
    <section id="noithat">
      <h1>NỘI THẤT</h1>
      <ProductImagesSlider images={productImages} />
    </section>
  );
}

function Thungxe() {
  return (
    <section id="thungxe">
      <h1>THÙNG XE</h1>
      <ProductImagesSlider images={productImages} />
    </section>
  );
}

function Khunggam() {
  return (
    <section id="khunggam">
      <h1>KHUNG GẦM</h1>
      <ProductImagesSlider images={productImages} />
    </section>
  );
}

function Dongco() {
  return (
    <section id="dongco">
      <h1>ĐỘNG CƠ</h1>
      <ProductImagesSlider images={productImages} />
    </section>
  );
}

function Thongsokythuat() {
  return (
    <section id="thongsokythuat">
      <h1>THÔNG SỐ KỸ THUẬT</h1>
      <ProductImagesSlider images={productImages} />
    </section>
  );
}

export default function CarDetail() {
  return (
    <div className="CarDetail">
      <Header />
      <Ngoaithat />
      <Noithat />
      <Thungxe />
      <Khunggam />
      <Dongco />
      <Thongsokythuat />
    </div>
  );
}
