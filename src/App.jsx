import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.sass";

import Main from "./Components/Main/Main.jsx"
import Textbook from "./Components/Textbook/Textbook.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Sprint from "./Components/Sprint/Sprint.jsx";
import SprintGame from "./Components/Sprint/SprintGame.jsx";
import ResultGame from "./Components/ResultGame/ResultGame.jsx";
import AudioCall from "./Components/AudioCall/AudioCall.jsx";



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
                path: "sprint/:level",
                element: <SprintGame />
            },
            {
                path:"sprint/:level/resultGame",
                element:<ResultGame/>
            },
            {
                path: "audioCall",
                element: <AudioCall />
            }
        ]
    }
])

function App(){
    return(
        <div className="app"> 
            <RouterProvider router ={router}/>
        </div>
    )
}

export default App;