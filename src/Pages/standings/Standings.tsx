import React, {useEffect, useState} from "react";
import {useStanding} from "../../hooks/useStanding";
import {Loader} from "../../components/loader/Loader";
import {MainContainer} from "../../components/mainContainer/MainContainer";
import {standingsType, teams} from "../../types/types";
import {StandingRow} from "./standingRow";
import './style.scss'
import {useLocationId} from "../../hooks/useLocationId";


export const Standings = () => {
    const {result, teams, load, fetchData} = useStanding()
    const {urlId} = useLocationId()
    useEffect(() => {
        if (!result) return
        fetchData(urlId as string)
    }, [])
        console.log(!result)
    if (!load) return <Loader/>

    return (
        <MainContainer>
            {result.map((item: any) => {
                console.log(item)
                return (
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
                            {item.map((ch: standingsType) => {
                                return <StandingRow key={ch.team_id} item={ch}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                )
            })}

        </MainContainer>

    )
}

