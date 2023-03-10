import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CarDetail from "../components/carDetail/CarDetail";

const Routers = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes >
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detail/:slug" element={<CarDetail />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>

    );
};

export default Routers;