import React from "react";
import {BrowserRouter as Router} from "react-router-dom"

import Header from "./Components/Header/Header.jsx"
import Main from "./Components/Main/Main.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App(){
    return(
        <div className="App">
            <Header />
            <Router>   
                <Main/>
            </Router> 
            <Footer />
        </div>
    )
}

export default App;