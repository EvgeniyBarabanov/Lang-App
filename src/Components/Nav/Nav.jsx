import React from "react";
import { Link } from "react-router-dom";

/* const PUBLIC_URL = process.env.PUBLIC_URL; */

function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/textbook">Textbook</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                <li> 
                    <ul>Games
                        <li><Link to="/sprint">Sprint →</Link></li>
                        <li><Link to="/audioCall">Audio-call →</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;