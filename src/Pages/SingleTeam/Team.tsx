import React, {useEffect} from "react";
import {useLocationId} from "../../hooks/useLocationId";
import {useStanding} from "../../hooks/useStanding";

export const Team = () => {
    const {urlId} = useLocationId()
    const {teams, fetchData, load} = useStanding()
    useEffect(() => {
    }, [])
    return (
        <div className='team'>

        </div>
    )
}
