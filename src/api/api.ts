import axios from 'axios'

const apiKey = '3c7ffef2c9c2079d5ac63d88aa8872f56204dd091dcfacb593becb8cb3d811a2'

export const instance = axios.create({
    baseURL: 'https://apiv3.apifootball.com/',

})
export const data = {
    getCompetitions: async () => {
        const res = await instance.get(`?action=get_leagues&country_id=6&APIkey=${apiKey}`)
    },
    getCountries: async () => {
        const res = await instance.get(`?action=get_countries&APIkey=${apiKey}`)
        return res.data
    }
}


