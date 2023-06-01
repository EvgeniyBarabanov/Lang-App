import React from "react";
import './Home.sass';
import { useNavigate } from "react-router-dom";

import Showcase from "../Showcase/Showcase";
import {counterInfo} from "../Counter/Counter";
import {createButtons} from "../Buttons/Buttons";
import StudentLogo from "../../../public/image/StudentLogo.png";
import StudentWithTablet from "../../../public/image/StudentWithTablet.png";
import GirlWithBook from "../../../public/image/girlWithBook.png";
import StudentsWithNotebook from "../../../public/image/studentsWithNotebook.png";
import SneakersLogo from "../../../public/image/sneakersLogo.svg";
import HornLogo from "../../../public/image/hornLogo.svg";
import LightningIcon from "../../../public/image/lightningIcon.svg";
import PlusIcon from "../../../public/image/plusIcon.svg";
import JoyStickIcon from "../../../public/image/joystickIcon.svg";


function Home(){

    const navigate = useNavigate();

    const handleSubmit = function(route){
        navigate(route);
    }

    let homeData = [
        {
            'icon': LightningIcon,
            'amount': "600",
            'iconPlus': PlusIcon,
            'postscript': "Popular words"
        },
        {
            'icon': JoyStickIcon,
            'amount': "2",
            'iconPlus': PlusIcon,
            'postscript': "Mini-games"
        }
    ]

    let homeInfo = [
        {
            'name': "E-COURSE PLATFORM",
            'heading': "Learning and teaching online, made easy.",
            'headingBig': true,
            'description': "Practice your English and learn new things with the platform.",
            'wordsGames': counterInfo(homeData),
            'content': <div className="showcase__content">
                <div className="buttonGroup"> {createButtons([
                    {
                        'text': "About platform",
                        'onClick': ()=>handleSubmit("aboutPlatform"),
                        'variant': "button_small filled"
                    }
                ])}</div>
                <div className="counterGroup">{counterInfo(homeData)}</div>
            </div>,
            'logo' : StudentLogo
        },
        {
            'heading': "Learn a language in a playful way",
            'description': "Make learning words more fun with mini-games",
            'content': <div className="showcase__content">
                <div className="buttonGroup"> {createButtons([
                    {
                        'text': "Sprint →",
                        'onClick' : ()=>handleSubmit("sprint"), 
                        'logo': SneakersLogo,
                        'variant': "button_small filled filled_picture  filled_color_pinkDark"
                    },
                    {
                        'text': "Audio-call →",
                        'onClick': ()=>handleSubmit("audioCall"), 
                        'logo': HornLogo,
                        'variant': "button_small filled filled_picture"
                    }
                ])}</div>
            </div>,
            'logo': StudentWithTablet,
            'reverse': true
        },
        {
            'heading': "Increase your vocabulary",
            'description': "Traditional and new effective approaches to word study",
            'content': <div className="showcase__content">
                <div className="buttonGroup"> {createButtons([
                    {
                        'text': "Textbook →",
                        'onClick': ()=>handleSubmit("textbook"), 
                        'variant': "button_small filled"
                    }
                ])}</div>
            </div>,
            'logo': GirlWithBook
        },
        {
            'heading': "Watch your progress every day",
            'description': "Save statistics on your achievements, words learned, and mistakes",
            'content': <div className="showcase__content">
                <div className="buttonGroup"> {createButtons([
                    {
                        'text': "Statistics →",
                        'onClick': ()=>handleSubmit("statistics"),
                        'variant': "button_small filled"
                }
                ])}</div>
            </div>,
            'logo': StudentsWithNotebook,
            'reverse': true
        }
    ];

    return(
        <div className="home">
            {
                homeInfo.map(
                    (item, index)=>{
                        return <Showcase key={index} reverse={item.reverse} name={item.name} headingBig={item.headingBig} heading={item.heading} description={item.description} content={item.content} logo={item.logo} />
                    }
                )
            }
        </div>
    )
}

export default Home;