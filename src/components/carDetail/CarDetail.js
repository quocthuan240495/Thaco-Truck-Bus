import React, { useEffect, useState } from "react";
import "./CarDetail.scss";
import {
  Row,
  Label,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import ProductImagesSlider from "../product-images-slider";
import { useParams } from "react-router-dom";
import { items } from "../../data";

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

function Header(dataHeader) {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log("aaaaa", dataHeader.dataHeader)
  }, [dataHeader]);

  return (
    <>
      <img src={dataHeader.dataHeader.srcImg} alt="" />
      <Row className="containerHeader">
        <Row className="imgHeader">
          <img src={require("../../images/icons/TF49.png")} alt="" />
        </Row>
        <Label>{dataHeader.dataHeader.lableHeader1}</Label>
        <Label>{dataHeader.dataHeader.lableHeader2}</Label>
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

function Ngoaithat(dataHeader) {
  return (
    <section id="ngoaithat">
      <h1>NGOẠI THẤT</h1>
      <ProductImagesSlider images={dataHeader.dataHeader.detail.imgDetail1} />
    </section>
  );
}

function Noithat(dataHeader) {
  return (
    <section id="noithat">
      <h1>NỘI THẤT</h1>
      <ProductImagesSlider images={dataHeader.dataHeader.detail.imgDetail2} />
    </section>
  );
}

function Thungxe(dataHeader) {
  return (
    <section id="thungxe">
      <h1>THÙNG XE</h1>
      <ProductImagesSlider images={dataHeader.dataHeader.detail.imgDetail3} />
    </section>
  );
}

function Khunggam(dataHeader) {
  return (
    <section id="khunggam">
      <h1>KHUNG GẦM</h1>
      <ProductImagesSlider images={dataHeader.dataHeader.detail.imgDetail4} />
    </section>
  );
}

function Dongco(dataHeader) {
  return (
    <section id="dongco">
      <h1>ĐỘNG CƠ</h1>
      <ProductImagesSlider images={dataHeader.dataHeader.detail.imgDetail5} />
    </section>
  );
}

function Thongsokythuat(dataHeader) {

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section id="thongsokythuat">
      <h1>THÔNG SỐ KỸ THUẬT</h1>
      <div>
        <Accordion flush open={open} toggle={toggle}>
          {/* {dataHeader?.dataHeader?.detail?.technicalInfo?.map((item, index) => ( */}
            <AccordionItem>
              <AccordionHeader targetId="1">{item.headerTitle}</AccordionHeader>
              <AccordionBody accordionId="1">
                <strong>This is the first item&#39;s accordion body.</strong>
                You can modify any of this with custom CSS or overriding our default
                variables. It&#39;s also worth noting that just about any HTML can
                go within the <code>.accordion-body</code>, though the transition
                does limit overflow.
              </AccordionBody>
            </AccordionItem>
          {/* ))} */}
        </Accordion>
      </div>
    </section>
  );
}

export default function CarDetail() {

  const { slug } = useParams();
  const singleCarItem = items.find((item) => item.nameLink === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <div className="CarDetail">
      <Header dataHeader={singleCarItem} />
      <Ngoaithat dataHeader={singleCarItem} />
      <Noithat dataHeader={singleCarItem} />
      <Thungxe dataHeader={singleCarItem} />
      <Khunggam dataHeader={singleCarItem} />
      <Dongco dataHeader={singleCarItem} />
      <Thongsokythuat dataHeader={singleCarItem} />
    </div>
  );
}
