import React from "react";
import "./Header.sass";
import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import Login from "../Login/Login.jsx";

function Header(){
    return(
        <div className="header">
            <Logo />
            <Nav />
            <Login />
        </div>
    )
}

export default Header;