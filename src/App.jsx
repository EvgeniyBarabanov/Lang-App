import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import "./App.sass";

import Main from "./Components/Main/Main.jsx"
import Textbook from "./Components/Textbook/Textbook.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Sprint from "./Components/Sprint/Sprint.jsx";
import SprintGame from "./Components/Sprint/SprintGame.jsx";
import SprintResult from "./Components/Sprint/SprintResult";
import AudioCall from "./Components/AudioCall/AudioCall.jsx";
import AudioCallGame from "./Components/AudioCall/AudioCallGame.jsx";
import AudioCallResult from "./Components/AudioCall/AudioCallResult";
import Form from "./Components/Form/Form.jsx";




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
                path:"sprint/:level/sprintResult",
                element:<SprintResult />
            },
            {
                path: "audioCall",
                element: <AudioCall />
            },
            {
                path: "audioCall/:level",
                element: <AudioCallGame />
            },
            {
                path:"audioCall/:level/audioCallResult",
                element:<AudioCallResult />
            },
            {
                path:"form",
                element:<Form />
            },
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