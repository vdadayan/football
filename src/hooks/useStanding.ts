import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AppStateType} from "../redux/store";
import {standingsThunk} from "../redux/reducers/legueStandingsReducer";
import {standingsType} from "../types/types";

export const useStanding = () => {
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)
    const {standings, teams} = useSelector((state: AppStateType) => state.standings)
    const fetchData = async (id: string) => {
        try {
            await dispatch(standingsThunk(id))
            await setLoad(true)
        } finally {
            await setLoad(true)
        }
    }
    const groupBy = (list: standingsType[], keyGetter: (arg0: standingsType) => string) =>  {
        const map = new Map();
        list.forEach((item: standingsType) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        let newMap: standingsType[] = []
        map.forEach(item => newMap.push(item));
        return newMap
    }
    const result = groupBy(standings, st => st.stage_name)
    console.log(load, 'useStanding')
    return {load, result, teams, fetchData}
}
