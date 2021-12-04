import axios from 'axios'
import {competitionsType, countryType} from "../types/types";

const apiKey = '3c7ffef2c9c2079d5ac63d88aa8872f56204dd091dcfacb593becb8cb3d811a2'

export const instance = axios.create({
    baseURL: 'https://apiv3.apifootball.com/',
})

export const data = {
    getCompetitions: async (id: string): Promise<competitionsType[]> => {
        const res = await instance.get(`?action=get_leagues&country_id=${id}&APIkey=${apiKey}`)
        return res.data
    },
    getCountries: async (): Promise<countryType[]> => {
        const res = await instance.get(`?action=get_countries&APIkey=${apiKey}`)
        return res.data
    },
    getleagueStandings: async (id: string)=> {
        const res = await instance.get(`?action=get_standings&league_id=${id}&APIkey=${apiKey}`)
        const resTeams = await instance.get(`https://apiv3.apifootball.com/?action=get_teams&league_id=${id}&APIkey=${apiKey}`)
        return {
            leagueStanding: res.data,
            teams: resTeams.data
        }
    }
}
