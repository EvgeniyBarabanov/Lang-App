import React from "react";
import { useOutlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Home from "../Home/Home.jsx";

function Main() {
    const outlet = useOutlet();

    return (
        <div className="Main">
            <Header />
            {outlet ? outlet : <Home />}
            <Footer />
        </div>
    );
}

export default Main;
