import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AppStateType} from "../redux/store";
import {competitionsThunk} from "../redux/reducers/competitionsReducer";

export const useCompetitions = () => {
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)
    const competitions = useSelector((state: AppStateType) => state.competitions.competitions)
    const fetchData =  async (id: string) => {
        try {
            await dispatch(competitionsThunk(id))
            await setLoad(true)
        }

        finally {
            setLoad(true)
        }
    }
    return {competitions, load, fetchData}
}
