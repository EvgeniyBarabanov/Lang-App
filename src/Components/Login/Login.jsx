import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="login">
            <Link to="/signIn">Log In &#8594;</Link>
            <Link to="/signOut">Sign Out</Link>
        </div>
    )
}

export default Login;