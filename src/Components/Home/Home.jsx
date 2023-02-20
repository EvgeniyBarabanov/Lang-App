import React from "react";

import HomeInfo from "../HomeInfo/HomeInfo";
import HomeData from "../HomeData/HomeData";
import HomeLink from "../HomeLink/HomeLink";
import StudentLogo from "../../../public/image/studentLogo.svg";
import StudentWithTablet from "../../../public/image/StudentwithTablet.svg";
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
        return    elements.map(
                (item, index)=>{
                    return <HomeLink key={index} reference={item.text} logo={item.logo}/>
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
                'text':"About platform",
            }
        ],
        [
            {
                'text':"Sprint", 
                'logo': SneakersLogo
            },
            {
                'text':"Audio-call", 
                'logo': HornLogo
            }
        ]
    ]

    console.log(arrLink(homeLink[1]));

    let homeInfo = [
        {
            'name': "E-COURSE PLATFORM",
            'title': "Learning and teaching online,made easy.",
            'description': "Practice your English and learn new things with the platform.",
            'link': arrLink(homeLink[0]),
            'wordsGames': arrInfo(homeData),
            'logo': StudentLogo,
        },
        {
            'title': "Learn a language in a playful way",
            'description': "Make learning words more fun with mini-games",
            'link': arrLink(homeLink[1]),
            'logo': StudentWithTablet,
        }
    ];

    return(
        <div className="Home">
            {
                homeInfo.map(
                    (item, index)=>{
                        return <HomeInfo key={index} name={item.name} title={item.title} description={item.description} link={item.link} wordsGames={item.wordsGames} logo={item.logo} />
                    }
                )
            }
        </div>
    )
}

export default Home;