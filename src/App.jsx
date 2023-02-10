import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.sass";

import Main from "./Components/Main/Main.jsx"
import Textbook from "./Components/Textbook/Textbook.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Sprint from "./Components/Sprint/Sprint.jsx";
import AudioCall from "./Components/AudioCall/AudioCall.jsx";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "textbook",
                element: <Textbook />
            },
            {
                path: "statistics",
                element: <Statistics />
            },
            {
                path: "sprint",
                element: <Sprint />
            },
            {
                path: "audioCall",
                element: <AudioCall />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    }
])

function App(){
    return(
        <div className="App"> 
            <RouterProvider router ={router}/> 
        </div>
    )
}

export default App;