import React, { useEffect } from "react";
import "./CarDetail.css";
import { Col, Row } from "reactstrap";
import Label from "reactstrap/lib/Label";

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
        <Row  className="link-area">
          <a
            href="/"
            onClick={e => {
              let hero = document.getElementById("hero");
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
              let about = document.getElementById("about");
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
              let contact = document.getElementById("contact");
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
              let hero = document.getElementById("hero");
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
              let about = document.getElementById("about");
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
              let contact = document.getElementById("contact");
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

function Hero() {
  return (
    <section id="hero">
      <h1>Hero Section</h1>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <h1>About Section</h1>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h1>Contact Section</h1>
    </section>
  );
}

export default function CarDetail() {
  return (
    <div className="CarDetail">
      <Header />
      <Hero />
      <About />
      <Contact />
    </div>
  );
}
