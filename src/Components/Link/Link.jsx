import React from "react";
import { Link } from "react-router-dom";
import './Links.sass'

function HomeLink(props){
    return(
        <div>
            {<Link to={props.toLink}>{props.reference}</Link>}
            {props.logo &&
                <props.logo/>
            }
        </div>
    )
}

export default HomeLink;