import React from "react";
import {Link} from "../../elements/link";

export const HeaderMenu = () => {
    const headerMenu = ['Новости', 'Матчи', 'Соревнования']
    return (
        <div className='header__menu'>
            {headerMenu.map((item:string, i)=>  <Link key={i} event={()=> undefined}>{item}</Link>)}
        </div>
    )
}
