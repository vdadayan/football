import {data} from "../../api/api";

const COUNTRIES = 'COUNTRIES'

export type countryType = {
    country_id: string
    country_logo: string
    country_name: string
}

const initialState: countryType = {
    country_id: '',
    country_logo: '',
    country_name: ''
}

export const countriesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COUNTRIES: {
            return {
                ...action.countries
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const countriesAction = (countries: countryType[]) => {
    return {type: COUNTRIES, countries}
}


export const countriesThunk = () => async (dispatch: any) => {
    const response = await data.getCountries()
    dispatch(countriesAction(response))

}
