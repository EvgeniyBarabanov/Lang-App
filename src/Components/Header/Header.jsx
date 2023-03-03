import React from "react";
import Logo from "../Logo/Logo.jsx";
import "./Header.sass";
import Nav from "../Nav/Nav.jsx"

function Header(){
    return(
        <div className="header">
            <Logo />
            <Nav />
        </div>
    )
}

export default Header;