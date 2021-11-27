import {InferActionsType} from "../store";
import {competitionsType, IInitialStateCompetitions} from "../../types/types";
import {data} from "../../api/api";


const COMPETITIONS = 'COMPETITIONS'


const InitialState: IInitialStateCompetitions = {
    competitions: []
}

export const CompetitionsReducer = (state = InitialState, action: ActionsType) => {
    switch (action.type) {
        case  COMPETITIONS: {
            return {
                ...state,
                competitions: action.competitions
            }
        }
        default: {
            return state
        }
    }
}

type ActionsType = InferActionsType<typeof actions>

const actions = {
    competitionsAction: (competitions: competitionsType[]) => {
        return ({type: COMPETITIONS, competitions} as const)
    }
}

export const competitionsThunk = (id: string) => async (dispatch: any) => {
    const response = await data.getCompetitions(id)
    dispatch(actions.competitionsAction(response))

}
