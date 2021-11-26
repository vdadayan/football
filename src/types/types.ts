export type countryType = {
    country_id: string
    country_logo: string
    country_name: string
}
export interface IInitialState{
    countries: countryType[]
}
