import React from "react"
import SEO from "../seo/Seo";
import HomeCarousel from "../carousel/HomeCarousel";
import Benefits from "../benefits/Benefits";
import Categories from "../categorySection/Categories";
import Products from "../productsSection/Products";
import Recommended from "../recommendationSector/Recommended"
import { Helmet } from "react-helmet";

const Home = () => {
    return (
      <>
       {/* <Helmet title="Home"> */}
        <SEO />
        <HomeCarousel />
        <Benefits />,
        <Categories />,
        <Products />,
        <Recommended />
       {/* </Helmet> */}
      </>
      
    );
  };
  
  export default Home;