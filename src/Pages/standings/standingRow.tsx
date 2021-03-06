import {standingsType} from "../../types/types";
import React, {FC} from "react";
import {MyLink} from "../../components/elements/MyLink";
import classnames from "classnames";

type RowType = {
    item: standingsType
    getIdLink?: any
}

export const StandingRow: FC<RowType> = ({item, getIdLink}) => {
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
                <MyLink event={getIdLink} id={team_id} url='teams-'>
                    {team_name}
                </MyLink>
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
