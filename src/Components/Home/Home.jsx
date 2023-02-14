import React from "react";

import HomeInfo from "../HomeInfo/HomeInfo";
import HomeData from "../HomeData/HomeData";
import StudentLogo from "../../../public/image/studentLogo.svg";
import LightningIcon from "../../../public/image/lightningIcon.svg";
import PlusIcon from "../../../public/image/plusIcon.svg";
import JoyStickIcon from "../../../public/image/joystickIcon.svg";

function Home(){
    
    let homeLink = [
        {
            'reference': "About platform"
        }
    ]

    let homeInfo = [
        {
            'name': "E-COURSE PLATFORM",
            'title': "Learning and teaching online,made easy.",
            'description': "Practice your English and learn new things with the platform.",
            'logo': StudentLogo,
            'variables':[]
        },{
            'name': "E-COURSE PLATFORM",
            'title': "Learning and teaching online,made easy.",
            'description': "Practice your English and learn new things with the platform.",
            'logo': StudentLogo
        }
    ];
    
    /* let homeData = [
        {
            'icon': {LightningIcon},
            'amount': "600",
            'icon': {PlusIcon},
            'postscript': "Popular words"
        },
        {
            'icon': {JoyStickIcon},
            'amount': "2",
            'icon': {PlusIcon},
            'postscript': "Mini-games"
        }
    ] */

    return(
        <div className="Home">
            {
                homeInfo.map(
                    (item, index)=>{
                        return <HomeInfo key={index} name={item.name} title={item.title} description={item.description} logo={item.logo} />
                    }
                )
            }
        </div>
    )
}

export default Home;