import React from "react";
import './header.scss'
import {HeaderMenu} from "./components/HeaderMenu";

export const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src="https://www.newsko.ru/media/6530085/futbol.jpg" alt=""/>
            <HeaderMenu/>
        </div>
    )
}
