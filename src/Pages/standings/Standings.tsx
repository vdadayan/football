import React, {useEffect, useState} from "react";
import {useStanding} from "../../hooks/useStanding";
import {Loader} from "../../components/loader/Loader";
import {MainContainer} from "../../components/mainContainer/MainContainer";
import {standingsType, teams} from "../../types/types";
import {StandingRow} from "./standingRow";
import './style.scss'
import {useLocationId} from "../../hooks/useLocationId";


export const Standings = () => {
    const {standings, teams, load, fetchData} = useStanding()
    const {urlId} = useLocationId()
    useEffect(() => {
        if (!standings) return
        fetchData(urlId as string)
    }, [])
    if (!load) return <Loader/>
    return (
        <MainContainer>
            <div className='standings'>
                <table>
                    <thead>
                    <tr>
                        <th/>
                        <th/>
                        <th>И</th>
                        <th>В</th>
                        <th>Н</th>
                        <th>П</th>
                        <th>З</th>
                        <th>П</th>
                        <th>+/-</th>
                        <th>О</th>
                    </tr>
                    </thead>
                    <tbody>
                    {standings.map((item: standingsType) => {
                        return <StandingRow key={item.team_id} item={item}/>
                    })}
                    </tbody>
                </table>
            </div>
        </MainContainer>
    )
}

