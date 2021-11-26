import React, {FC, useEffect} from "react";
import './list.scss';
import {useCountries} from "../../hooks/useCountries";
import {Loader} from "../loader/Loader";

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
        <div className='list'>
            {!load ? <Loader/> :
                <>
                    {countries.map((item) => <ListItem id={item.country_id} image={item.country_logo} country={item.country_name}/>)}
                </>}
        </div>
    )
}


const ListItem: FC<ListItemType> = ({image, country, id}) => {
    const chooseCountry = (e:  React.MouseEvent<HTMLDivElement>) => {

    }
    return (
        <div className='list__item' id={id} onClick={(e)=>chooseCountry(e)}>
            <img src={image} alt="pic"/>
            <div>{country}</div>
        </div>
    )
}
