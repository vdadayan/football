import React, {FC} from "react";
import {competitionsType} from "../../types/types";
import {CompetitionLink} from "../../components/elements/competitionLink";

export const CompetitionItem: FC<competitionsType> = (props) => {
    const {country_logo, league_name, league_season, league_id} = props
    return (
        <div className='competitions__item'>
            <CompetitionLink id={league_id} name={league_name} country_logo={country_logo}/>
            <div>{league_season}</div>
        </div>
    )
}
