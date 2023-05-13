import React from "react";
import { Link } from "react-router-dom";

import "./Nav.sass";

function Nav(){
    return(
        <nav className="navigation">
            <ul className="list">
                <li className="list__item"><Link className="list__link text text_size16" to="/">Home</Link></li>
                <li className="list__item"><Link className="list__link text text_size16" to="/textbook">Textbook</Link></li>
                <li className="list__item"><Link className="list__link text text_size16" to="/statistics">Statistics</Link></li>
                <li className="list__item">
                    <Link className="list__link text text_size16">Games &#8595;</Link>
                    <ul className="list list_nested">
                        <li><Link className="list__link list__link_nested text text_size16" to="/sprint">Sprint</Link></li>
                        <li><Link className="list__link list__link_nested text text_size16" to="/audioCall">Audio-call</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;