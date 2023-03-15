import React from "react";

import HomeInfo from "../Showcase/Showcase";
import HomeData from "../Counter/Counter";
import HomeLink from "../Link/Link";
import StudentLogo from "../../../public/image/studentLogo.svg";
import StudentWithTablet from "../../../public/image/StudentwithTablet.svg";
import GirlWithBook from "../../../public/image/girlWithBook.svg";
import StudentsWithNotebook from "../../../public/image/studentsWithNotebook.svg";
import SneakersLogo from "../../../public/image/sneakersLogo.svg";
import HornLogo from "../../../public/image/hornLogo.svg";
import LightningIcon from "../../../public/image/lightningIcon.svg";
import PlusIcon from "../../../public/image/plusIcon.svg";
import JoyStickIcon from "../../../public/image/joystickIcon.svg";


function Home(){

    const arrInfo = function(elements){
        let wordsGamesInfo = [];
        elements.map(
            (item, index)=>{
                wordsGamesInfo.push(<HomeData key={index} icon={item.icon} amount={item.amount} iconPlus={item.iconPlus} postscript={item.postscript}/>)
            }
        )
        return wordsGamesInfo;
    }

    const arrLink = function(elements){
        return elements.map(
            (item, index)=>{
                return <HomeLink key={index} reference={item.text} toLink={item.toLink} logo={item.logo}/>
            }
        )
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

    let homeLink = [
        [
            {
                'text': "About platform",
                'toLink': "/"
            }
        ],
        [
            {
                'text': "Sprint",
                'toLink' : "sprint", 
                'logo': SneakersLogo
            },
            {
                'text': "Audio-call",
                'toLink': "audioCall", 
                'logo': HornLogo
            }
        ],
        [
            {
                'text': "Textbook",
                'toLink': "textbook"  
            }
        ],
        [
            {
                'text': "Statistics",
                'toLink': "statistics"  
            }
        ]
    ]

    let homeInfo = [
        {
            'name': "E-COURSE PLATFORM",
            'heading': "Learning and teaching online, made easy.",
            'description': "Practice your English and learn new things with the platform.",
            'link': arrLink(homeLink[0]),
            'wordsGames': arrInfo(homeData),
            'logo': StudentLogo,
            'big': true
        },
        {
            'heading': "Learn a language in a playful way",
            'description': "Make learning words more fun with mini-games",
            'link': arrLink(homeLink[1]),
            'logo': StudentWithTablet
        },
        {
            'heading': "Increase your vocabulary",
            'description': "Traditional and new effective approaches to word study",
            'link': arrLink(homeLink[2]),
            'logo': GirlWithBook
        },
        {
            'heading': "Watch your progress every day",
            'description': "Save statistics on your achievements, words learned, and mistakes",
            'link': arrLink(homeLink[3]),
            'logo': StudentsWithNotebook
        }
    ];

    return(
        <div className="Home">
            {
                homeInfo.map(
                    (item, index)=>{
                        return <HomeInfo key={index} name={item.name} big={item.big} heading={item.heading} description={item.description} link={item.link} wordsGames={item.wordsGames} logo={item.logo} />
                    }
                )
            }
        </div>
    )
}

export default Home;