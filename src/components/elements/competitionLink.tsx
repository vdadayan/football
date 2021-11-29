import React, {FC} from 'react'
import {NavLink} from "react-router-dom";

type CompetitionLinkPropsType = {
    id: string
    name: string
    country_logo: string
}

export const CompetitionLink: FC<CompetitionLinkPropsType> = ({id, name, country_logo}) => {
    return (
        <NavLink className='competitions-link' to={'/' + id }>
            <img src={country_logo} alt=""/>
            <div>{name}</div>
        </NavLink>
    )
}
