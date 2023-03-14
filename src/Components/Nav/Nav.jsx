import React from "react";
import { Link } from "react-router-dom";

import "./Nav.sass";

function Nav(){
    return(
        <nav className="navigation">
            <ul className="list">
                <li className="list__item"><Link className="list__link link" to="/">Home</Link></li>
                <li className="list__item"><Link className="list__link link" to="/textbook">Textbook</Link></li>
                <li className="list__item"><Link className="list__link link" to="/statistics">Statistics</Link></li>
                <li className="list__item">
                    <Link className="list__link link">Games &#8595;</Link>
                    <ul className="list list_nested">
                        <li><Link className="list__link link list__link_nested" to="/sprint">Sprint</Link></li>
                        <li><Link className="list__link link list__link_nested" to="/audioCall">Audio-call</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;