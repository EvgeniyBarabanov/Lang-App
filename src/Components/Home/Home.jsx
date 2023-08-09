import React from "react";
import './Home.sass';
import { useNavigate } from "react-router-dom";

import Showcase from "../Showcase/Showcase";
import {counterInfo} from "../Counter/Counter";
import {Button, ButtonGroup} from "../Buttons/Buttons";
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

    const counterData = [
        {
            'icon': LightningIcon,
            'amount': "10000",
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

    const buttonsData = [
        {
            'text': "Sprint →",
            'onClick' : ()=>handleSubmit("sprint"), 
            'logo': SneakersLogo,
            'className': "button button_small filled filled_picture filled_color_pinkDark",
            dsiabled : true
        },
        {
            'text': "Audio-call →",
            'onClick': ()=>handleSubmit("audioCall"), 
            'logo': HornLogo,
            'className': "button button_small filled filled_picture"
        }
    ]

    const homeInfo = [
        {
            'name': "E-COURSE PLATFORM",
            'heading': "Learning and teaching online, made easy.",
            'headingBig': true,
            'description': "Practice your English and learn new things with the platform.",
            'content': <div className="showcase__content">
                <Button onClick={()=>handleSubmit("aboutPlatform")} className={'button button_small filled'}>
                    AboutPlatform
                </Button>  
                <div className="counterGroup">{counterInfo(counterData)}</div>
            </div>,
            'logo' : StudentLogo
        },
        {
            'heading': "Learn a language in a playful way",
            'description': "Make learning words more fun with mini-games",
            'content': <div className="showcase__content">
                <ButtonGroup className="buttonGroup" elements={buttonsData}></ButtonGroup>
            </div>,
            'logo': StudentWithTablet,
            'reverse': true
        },
        {
            'heading': "Increase your vocabulary",
            'description': "Traditional and new effective approaches to word study",
            'content': <div className="showcase__content">
                <Button onClick={()=>handleSubmit("textbook")} className={'button button_small filled'}>
                    Textbook →
                </Button>  
            </div>,
            'logo': GirlWithBook
        },
        {
            'heading': "Watch your progress every day",
            'description': "Save statistics on your achievements, words learned, and mistakes",
            'content': <div className="showcase__content">
                <Button onClick={()=>handleSubmit("statistics")} className={'button button_small filled'}>
                    Statistics →
                </Button> 
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