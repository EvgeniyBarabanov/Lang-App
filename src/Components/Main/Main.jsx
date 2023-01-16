import React from "react";
import {Routes, Route} from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard.jsx'
import Textbook from '../Textbook/Textbook.jsx'
import Statistics from '../Statistics/Statistics.jsx'
import Sprint from '../Sprint/Sprint.jsx'
import AudioCall from '../AudioCall/AudioCall.jsx'

function Main(){
    return(
        <div className="Main">
            <Routes>
                <Route path="*" element={<Dashboard />} />
                <Route path="/textbook" element={<Textbook />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/sprint" element={<Sprint />} />
                <Route path="/audioCall" element={<AudioCall />} />
            </Routes>
        </div>
    )
}

export default Main;