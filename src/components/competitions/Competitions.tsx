import React, {useEffect} from "react";
import {MainContainer} from "../mainContainer/MainContainer";
import './competitions.scss';
import {CompetitionItem} from "./CompetitionItem";
import {useCompetitions} from "../../hooks/useCompetitions";
import {useLocation} from "react-router-dom";
import {Loader} from "../loader/Loader";
import {competitionsType} from "../../types/types";

export const Competitions = () => {
    const {competitions, fetchData, load} = useCompetitions()
    console.log(competitions)
    const {pathname} = useLocation()
    const idCountry = pathname.split('-').pop()

    useEffect(() => {
        if (!competitions) return
        fetchData(idCountry as string)
    }, [])
    if (!load) return <Loader/>
    return (
        <MainContainer>
            <div className='competitions'>
                <div className='competitions__inner'>
                    {competitions.map((competition:competitionsType) => {
                       return <CompetitionItem key={competition.league_id} {...competition}/>
                    })}
                </div>
            </div>
        </MainContainer>
    )
}
