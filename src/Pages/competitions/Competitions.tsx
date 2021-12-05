import React, {useEffect} from "react";
import {MainContainer} from "../../components/mainContainer/MainContainer";
import './competitions.scss';
import {CompetitionItem} from "./CompetitionItem";
import {useCompetitions} from "../../hooks/useCompetitions";
import {Loader} from "../../components/loader/Loader";
import {competitionsType} from "../../types/types";
import {useLocationId} from "../../hooks/useLocationId";

export const Competitions = () => {
    const {competitions, fetchData, load} = useCompetitions()
    const {urlId} = useLocationId()
    useEffect(() => {
        if (!competitions) return
        fetchData(urlId as string)
    }, [])
    if (!load) return <Loader/>
    return (
        <MainContainer>
            <div className='competitions'>
                <div className='competitions__inner'>
                    {competitions.map((competition: competitionsType) => {
                        return <CompetitionItem key={competition.league_id} {...competition}/>
                    })}
                </div>
            </div>
        </MainContainer>
    )
}
