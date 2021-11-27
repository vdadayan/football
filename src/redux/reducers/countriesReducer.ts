import {data} from "../../api/api";
import {countryType, IInitialStateCountries} from "../../types/types";
import {InferActionsType} from "../store";

const COUNTRIES = 'COUNTRIES'

const initialState: IInitialStateCountries = {
    countries: [],
}

export const CountriesReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case COUNTRIES: {
            return {
                ...state,
                countries: action.countries
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

type ActionsType = InferActionsType<typeof actions>
const actions = {
    countriesAction:(countries: countryType[]) => {
        return ({type: COUNTRIES, countries} as const)
    }
}


export const countriesThunk = () => async (dispatch: any) => {
    const response = await data.getCountries()
    dispatch(actions.countriesAction(response))

}
