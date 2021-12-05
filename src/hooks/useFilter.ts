import {teams} from "../types/types";

export const useFilter = (arr: teams[], filter: string) => {
    const filteredArray = arr.filter((item: teams) => item.team_key === filter)
    return {filteredArray}
}
