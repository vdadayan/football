import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AppStateType} from "../redux/store";
import {standingsThunk} from "../redux/reducers/legueStandingsReducer";

export const useStanding = () => {
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)
    const {standings, teams} = useSelector((state: AppStateType) => state.standings)
    const fetchData = async (id: string) => {
        console.log(1)
        try {
            await dispatch(standingsThunk(id))
            await setLoad(true)
        } finally {
            await setLoad(true)
        }
    }
    return {load, standings, teams, fetchData}
}
