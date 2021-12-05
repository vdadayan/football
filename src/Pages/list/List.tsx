import React, {FC, useEffect} from "react";
import './list.scss';
import {useCountries} from "../../hooks/useCountries";
import {Loader} from "../../components/loader/Loader";
import {countryType} from "../../types/types";
import {MainContainer} from "../../components/mainContainer/MainContainer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {competitionsThunk} from "../../redux/reducers/competitionsReducer";

type ListItemType = {
    image: string
    country: string
    id: string
}

export const List = () => {
    const {load, fetchData, countries} = useCountries()
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <MainContainer>
            <div className='list'>
                {!load ? <Loader/> :
                    <>
                        {countries.map((item: countryType) => <ListItem key={item.country_id} id={item.country_id}
                                                                        image={item.country_logo}
                                                                        country={item.country_name}/>)}
                    </>}
            </div>
        </MainContainer>
    )
}


const ListItem: FC<ListItemType> = ({image, country, id}) => {
    const dispatch = useDispatch()
    const chooseCountry = (e: any) => {
        const {id} = e.currentTarget
        dispatch(competitionsThunk(id))
    }
    return (
        <NavLink to={'countries/' + country + '-' + id}>
            <div className='list__item' id={id} onClick={(e) => chooseCountry(e)}>
                <img src={image} alt="pic"/>
                <span>{country}</span>
            </div>
        </NavLink>
    )
}
