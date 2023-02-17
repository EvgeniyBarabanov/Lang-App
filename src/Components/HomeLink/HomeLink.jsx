import React from "react";
import { Link } from "react-router-dom";
function HomeLink(props){
    return(
        <Link to="/">{props.reference}</Link>
    )
}

export default HomeLink;