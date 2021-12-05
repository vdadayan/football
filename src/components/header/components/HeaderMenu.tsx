import React from "react";
import {MyLink} from "../../elements/MyLink";

export const HeaderMenu = () => {
    const headerMenu = ['Новости', 'Матчи', 'Соревнования']
    return (
        <div className='header__menu'>
            {headerMenu.map((item:string, i)=>  <MyLink key={i} id={''} url={''} event={()=> undefined}>{item}</MyLink>)}
        </div>
    )
}
