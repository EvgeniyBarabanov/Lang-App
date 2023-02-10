import React from "react";
import Student from "../../../public/image/student.png";

function Home(){
    
    return(
        <div className="Home-page">
            <span>E-COURSE PLATFORM</span>
            <h2>Learning and teaching online, made easy.</h2>
            <p>Practice your English and learn new things with the platform.</p>
            <img src={Student} alt="" />
        </div>
    )
}

export default Home;