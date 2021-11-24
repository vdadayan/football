import React, {FC, useEffect} from "react";
import './list.scss';
import {useCountries} from "../../hooks/useCountries";

type ListItemType = {
    image: string
    country: string
    id: string
}

type count = {
    country_id: string
    country_logo: string
    country_name: string
}

export const List = () => {
    const {load, fetchData, countries} = useCountries()
    useEffect(() => {
        fetchData()
    }, [])
    const countriesArray: any = Object.values(countries).map((item) => {
        return item
    });
    return (
        <div className='list'>
            {!load ? <>loading</> :
                <>
                    {countriesArray.map((item: any) => <ListItem id={item.country_id} image={item.country_logo} country={item.country_name}/>)}
                </>}
        </div>
    )
}


const ListItem: FC<ListItemType> = ({image, country, id}) => {
    const chooseCountry = (e:any) => {
    }
    return (
        <div className='list__item' id={id} onClick={(e)=>chooseCountry(e)}>
            <img src={image} alt="pic"/>
            <div>{country}</div>
        </div>
    )
}
