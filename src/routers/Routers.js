import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Routers = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes >
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>

    );
};

export default Routers;