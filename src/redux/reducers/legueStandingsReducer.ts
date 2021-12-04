import {IInitialStandings, standingGroup} from "../../types/types";
import {InferActionsType} from "../store";
import {data} from "../../api/api";

const STANDINGS = 'STANDINGS'

const InitialState: IInitialStandings = {
    standings: [],
    teams: []
}

export const standingsReducer = (state = InitialState, action:ActionsType) => {
    switch (action.type) {
        case "STANDINGS": {
            return {
                ...state,
                standings: action.standings.leagueStanding,
                teams: action.standings.teams
            }
        }
        default: {
            return state
        }
    }
}

type ActionsType = InferActionsType<typeof actions>

const actions = {
    standingsAction: (standings: standingGroup) => {
        return ({type: STANDINGS, standings} as const)
    }
}


export const standingsThunk = (id:string) => {
    return async (dispatch:any) => {
        const response = await data.getleagueStandings(id)
        dispatch(actions.standingsAction(response))
    }
}
