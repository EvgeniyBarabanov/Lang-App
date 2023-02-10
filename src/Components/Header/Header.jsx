import React from "react";
import "./Header.sass";

import Nav from "../Nav/Nav.jsx"

function Header(){
    return(
        <div className="Header">
            <h1>Header</h1>
            <Nav />
        </div>
    )
}

export default Header;