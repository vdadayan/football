import React, {FC, useEffect} from "react";
import {useStanding} from "../../hooks/useStanding";
import {Loader} from "../loader/Loader";
import {useLocation} from "react-router-dom";
import {MainContainer} from "../mainContainer/MainContainer";
import {standingsType, teams} from "../../types/types";

import './style.scss'
import {Link} from "../elements/link";
import classnames from "classnames";

export const Standings = () => {
    const {standings, teams,load, fetchData} = useStanding()
    const {pathname} = useLocation()
    const idCountry = pathname.split('-').pop()
    const getIdLink = (e: any) => {
        const {id} = e.currentTarget

    }
    useEffect(() => {
        if (!standings) return
        fetchData(idCountry as string)
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
                        return <Row key={item.team_id} getIdLink={getIdLink} item={item}/>
                    })}
                    </tbody>
                </table>
            </div>
        </MainContainer>
    )
}

type RowType = {
    item: standingsType
    getIdLink: any
}

const Row: FC<RowType> = ({item,getIdLink}) => {
    const {teams} = useStanding()
    const {
        overall_league_position,
        team_name,
        overall_league_payed,
        overall_league_D,
        overall_league_W,
        overall_league_L,
        home_league_GA,
        overall_league_GF,
        overall_league_PTS,
        team_badge,
        overall_promotion,
        team_id
    } = item

    return (
        <tr>
            <td className={classnames({
                'table-position': true,

            })}>
                <span className={classnames({
                    'position-next': overall_promotion,
                    'el': overall_promotion.includes('Europa'),
                    'down': overall_promotion.includes('Relegation')
                })}>{overall_league_position}</span>
                {overall_promotion && <div className='notice'>{overall_promotion}</div>}
            </td>
            <td className='table-name'>
                <img src={team_badge} alt='pic'/>
                <Link event={getIdLink} id={team_id}>
                    {team_name}
                </Link>
            </td>
            <td>{overall_league_payed}</td>
            <td>{overall_league_W}</td>
            <td>{overall_league_D}</td>
            <td>{overall_league_L}</td>
            <td>{overall_league_GF}</td>
            <td>{home_league_GA}</td>
            <td>{overall_league_GF - home_league_GA}</td>
            <td>{overall_league_PTS}</td>
        </tr>
    )
}
