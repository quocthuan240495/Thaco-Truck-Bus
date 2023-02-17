import React, { Fragment } from "react";
import PropTypes from "prop-types"

import Navbar from "../navbar/Navbar"
import "./layout.css"
import Footer from "../footer/Footer"
import Routers from "../../routers/Routers";

const Layout = () => {
  return (
    <>
      <Fragment>
        <Navbar />
        <div>
          <Routers />
        </div>
        <Footer />
    </Fragment>
    </>
  )
}

export default Layout
