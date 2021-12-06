import React, {useEffect} from "react";
import {useLocationId} from "../../hooks/useLocationId";
import {useStanding} from "../../hooks/useStanding";
import {teams} from "../../types/types";
import {Loader} from "../../components/loader/Loader";


export const Team = () => {
    const {urlId} = useLocationId()
    const {teams, fetchData, load} = useStanding()
    let localId: any =  localStorage.getItem('leagueId')
    useEffect(() => {
        if (teams.length === 0) fetchData(localId)
    }, [])
    if (!load) return <Loader/>
    return (
        <div className='team'>
            {teams.filter((team: teams) => team.team_key === urlId).map((team: teams) => <div
                key={team.team_key}>{team.team_name}</div>)}
        </div>
    )
}
