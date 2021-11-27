import React from "react";
import {Route, Routes} from "react-router-dom";
import {List} from "../components/list/List";
import {Competitions} from "../components/competitions/Competitions";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<List/>}/>
            <Route path='/countries/:country' element={<Competitions/>}/>
            <Route/>
            <Route/>
        </Routes>
    )
}
