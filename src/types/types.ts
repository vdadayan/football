export type countryType = {
    country_id: string
    country_logo: string
    country_name: string
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
export interface IInitialStandings {
    standings: standingsType[]
}

export type standingsType = {
    country_name: string,
    league_id: string,
    league_name: string,
    team_id: string,
    team_name: string,
    overall_promotion: string,
    overall_league_position: number,
    overall_league_payed: number,
    overall_league_W: number,
    overall_league_D: number,
    overall_league_L: number,
    overall_league_GF: number,
    overall_league_GA: number,
    overall_league_PTS: number,
    home_league_position: number,
    home_promotion: number,
    home_league_payed: number,
    home_league_W: number,
    home_league_D: number,
    home_league_L: number,
    home_league_GF: number,
    home_league_GA: number,
    home_league_PTS: number,
    away_league_position: number,
    away_promotion: number,
    away_league_payed: number,
    away_league_W: number,
    away_league_D: number,
    away_league_L: number,
    away_league_GF: number,
    away_league_GA: number,
    away_league_PTS: number,
    league_round: any,
    team_badge: string,
    fk_stage_key: number,
    stage_name: string

}
