import React from "react";
import { Link } from "react-router-dom";
function HomeLink(props){
    return(
        <div className="test">
            {<Link to="/">{props.reference}</Link>}
            {props.logo &&
                <props.logo/>
            }
        </div>
    )
}

export default HomeLink;