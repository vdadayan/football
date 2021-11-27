import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {countriesThunk} from "../redux/reducers/countriesReducer";
import {AppStateType} from "../redux/store";


export const useCountries = () => {
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)
    const countries = useSelector((state: AppStateType) => state.countries.countries)
    const fetchData = async () => {
        try {
            await setLoad(false)
            await dispatch(countriesThunk())
        } finally {
            await setLoad(true)
        }
    }

    return {fetchData, load, countries}
}
