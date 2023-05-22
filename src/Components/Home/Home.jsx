import React from "react";
import './Home.sass';


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
            'button': createButtons([
                {
                    'text': "About platform",
                    'route': "aboutPlatform",
                    'variant': "button_small filled"
                }
            ]),
            'wordsGames': counterInfo(homeData),
            'logo' : StudentLogo
        },
        {
            'heading': "Learn a language in a playful way",
            'description': "Make learning words more fun with mini-games",
            'button': createButtons([
                {
                    'text': "Sprint →",
                    'route' : "sprint", 
                    'logo': SneakersLogo,
                    'variant': "button_small filled filled_picture filled_color_pinkDark"
                },
                {
                    'text': "Audio-call →",
                    'route': "audioCall", 
                    'logo': HornLogo,
                    'variant': "button_small filled filled_picture"
                }
        ]),
            'logo': StudentWithTablet,
            'reverse': true
        },
        {
            'heading': "Increase your vocabulary",
            'description': "Traditional and new effective approaches to word study",
            'button': createButtons([
                {
                    'text': "Textbook →",
                    'route': "textbook",
                    'variant': "button_small filled"
                }
            ]),
            'logo': GirlWithBook
        },
        {
            'heading': "Watch your progress every day",
            'description': "Save statistics on your achievements, words learned, and mistakes",
            'button': createButtons([
                {
                    'text': "Statistics →",
                    'route': "statistics",
                    'variant': "button_small filled"
                }
            ]),
            'logo': StudentsWithNotebook,
            'reverse': true
        }
    ];

    return(
        <div className="home">
            {
                homeInfo.map(
                    (item, index)=>{
                        return <Showcase key={index} reverse={item.reverse} name={item.name} headingBig={item.headingBig} heading={item.heading} description={item.description} button={item.button} wordsGames={item.wordsGames} logo={item.logo} />
                    }
                )
            }
        </div>
    )
}

export default Home;