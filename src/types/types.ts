export type countryType = {
    country_id: string
    country_logo: string
    country_name: string
}

export interface IInitialState {
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

export interface IInitialStandings {
    standings: standingsType[]
    teams: teams[]
}

//standing, teams
export type standingGroup = {
    leagueStanding: standingsType[]
    teams: teams[]
}


export type teams = {
    coaches: coaches[]
    players: players[]
    team_badge: string
    team_key: string
    team_name: string
}
export type players = {
    player_age: string
    player_assists: string
    player_blocks: string
    player_clearances: string
    player_country: string
    player_crosses_total: string
    player_dispossesed: string
    player_dribble_attempts: string
    player_dribble_succ: string
    player_duels_total: string
    player_duels_won: string
    player_fouls_committed: string
    player_goals: string
    player_goals_conceded: string
    player_id: string
    player_image: string
    player_injured: string
    player_inside_box_saves: string
    player_interceptions: string
    player_is_captain: string
    player_key: number
    player_key_passes: string
    player_match_played: string
    player_name: string
    player_number: string
    player_passes: string
    player_passes_accuracy: string
    player_pen_comm: string
    player_pen_missed: string
    player_pen_scored: string
    player_pen_won: string
    player_rating: string
    player_red_cards: string
    player_saves: string
    player_shots_total: string
    player_substitute_out: string
    player_substitutes_on_bench: string
    player_tackles: string
    player_type: string
    player_woordworks: string
    player_yellow_cards: string
}
type coaches = {
    coach_age: string
    coach_country: string
    coach_name: string
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
