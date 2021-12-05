import React from "react";
import {Route, Routes} from "react-router-dom";
import {List} from "../Pages/list/List";
import {Competitions} from "../Pages/competitions/Competitions";
import {Standings} from "../Pages/standings/Standings";
import {Team} from "../Pages/SingleTeam/Team";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='/countries/:country' element={<Competitions/>}/>
            <Route path='/standings-:standings' element={<Standings/>}/>
            <Route path='/teams-:teams' element={<Team/>}/>
        </Routes>
    )
}
