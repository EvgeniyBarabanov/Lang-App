import React from "react";
import "./Header.sass";
import Logo from "../Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import Form from "../Form/Form.jsx";

function Header(){
    return(
        <div className="header">
            <div className="container">
                <Logo />
                <Nav />
                <Form />
            </div>
        </div>
    )
}

export default Header;