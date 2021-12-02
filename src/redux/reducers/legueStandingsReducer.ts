import {competitionsType, IInitialStandings} from "../../types/types";
import {InferActionsType} from "../store";
import {data} from "../../api/api";

const STANDINGS = 'STANDINGS'

const InitialState: IInitialStandings = {
    standings: []
}

export const standingsReducer = (state = InitialState, action:ActionsType) => {
    switch (action.type) {
        case "STANDINGS": {
            return {
                ...state,
                standings: action.standings
            }
        }
        default: {
            return state
        }
    }
}

type ActionsType = InferActionsType<typeof actions>

const actions = {
    standingsAction: (standings: competitionsType[]) => {
        return ({type: STANDINGS, standings} as const)
    }
}


export const standingsThunk = (id:string) => {
    return async (dispatch:any) => {
        const response = await data.getleagueStandings(id)
        dispatch(actions.standingsAction(response))
    }
}
