import React from "react";
import { Link } from "react-router-dom";
import "./Footer.sass"
import GitHubIcon from "../../../public/image/gitHubIcon.svg"
import GlobalTalkIcon from "../../../public/image/globalTalkIcon.svg"
import YouTubeIcon from "../../../public/image/youTubeIcon.svg"

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <ul className="socials">
                    <li className="socials__item"><Link className="socials__link" to=""><GitHubIcon className="gitIcon" /></Link></li>
                    <li className="socials__item"><Link className="socials__link" to=""><GlobalTalkIcon className="globalTalkIcon" /></Link></li>
                    <li className="socials__item"><Link className="socials__link" to=""><YouTubeIcon className="youTubeIcon" /></Link></li>
                </ul>
                <Link className="text link text_size14 text_decoration" to="/aboutCreators">about the creators</Link>
                <p className="text text_size12">©2021 GlobalTalk. Project for GlobalTalk.</p>
            </div>
        </div>
    )
}

export default Footer;