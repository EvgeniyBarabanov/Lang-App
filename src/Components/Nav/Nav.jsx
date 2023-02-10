import React from "react";
import { Link } from "react-router-dom";

import "./Nav.sass";

function Nav(){
    return(
        <nav>
            <ul>
                <li>GlobalTalk</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/textbook">Textbook</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                <li>
                    <ul>Games &#8595;
                        <li><Link to="/sprint">Sprint</Link></li>
                        <li><Link to="/audioCall">Audio-call</Link></li>
                    </ul>
                </li>
                <li><Link to="/login">Log In &#8594;</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;