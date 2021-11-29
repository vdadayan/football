export type countryType = {
    country_id: string
    country_logo: string
    country_name: string
}
export interface IInitialState{
    countries: countryType[]
}
export interface IInitialStateCountries {
    countries: countryType[]
}

export type competitionsType = {
    country_id: string
    country_name: string
    league_id: string
    league_name: string
    league_season: string
    league_logo: string
    country_logo: string
}

export interface IInitialStateCompetitions {
    competitions: competitionsType[]
}
