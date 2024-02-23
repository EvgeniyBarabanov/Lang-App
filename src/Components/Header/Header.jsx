import React from "react";
import "./Header.sass";
import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import User from "../User/User.jsx";

function Header(){
    return(
        <div className="header">
            <div className="container">
                <Logo />
                <Nav />
                <User />
            </div>
        </div>
    )
}

export default Header;