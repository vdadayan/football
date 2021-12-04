import React, {FC} from 'react'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {standingsThunk} from "../../redux/reducers/legueStandingsReducer";

type CompetitionLinkPropsType = {
    id: string
    name: string
    country_logo: string
}

export const CompetitionLink: FC<CompetitionLinkPropsType> = ({id, name, country_logo}) => {
    const dispatch = useDispatch()
    const handleClick = (e: any) => {
        const {id} = e.currentTarget
        dispatch(standingsThunk(id))
    }

    return (
        <NavLink className='competitions-link' to={'/standings-' + id} >
            <div id={id} onClick={(e) => handleClick(e)}>
                <img src={country_logo} alt=""/>
                <div>{name}</div>
            </div>
        </NavLink>
    )
}
