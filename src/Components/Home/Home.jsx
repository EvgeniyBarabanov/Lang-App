import React from "react";
import { Link } from "react-router-dom";

import HomeInfo from "../HomeInfo/HomeInfo";
import HomeData from "../HomeData/HomeData";
import Student from "../../../public/image/student.png";


function Home(){
    
    let homeInfo = [
        {
            'name': "E-COURSE PLATFORM",
            'title': "Learning and teaching online,made easy.",
            'description': "Practice your English and learn new things with the platform.",
            'reference': "About platform",
            'icon': {/* иконка молнии */},
            'amount': "600",
            'icon': {/* иконка плюсика */},
            'postscript': "Popular words",
            'icon': {/* иконка джойстика */},
            'amount': "2",
            'icon': {/* иконка плюсика */},
            'postscript': "mini-games",
            'logo': {Student}
        }
    ];
    
    return(
        <div className="Home">
            {
                homeInfo.map(
                    (obj, index)=>{
                        return <HomeInfo/>
                    }
                )
            }
        </div>
    )
}

export default Home;