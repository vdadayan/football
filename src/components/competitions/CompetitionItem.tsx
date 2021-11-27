import React, {FC} from "react";
import {competitionsType} from "../../types/types";


export const CompetitionItem: FC<competitionsType> = (props) => {
    const {country_logo} = props
    return (
        <div className='competitions__item'>
            <img src={country_logo} alt="pic"/>
        </div>
    )
}
