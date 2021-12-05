import React, {FC} from "react";
import {NavLink} from "react-router-dom";

type LinkType = {
    children?: any
    event?: any
    id: string
    url: string
}

export const MyLink: FC<LinkType> = ({children, event, id, url}) => {
    return (
        <NavLink to={'/' + url + id}>
            <div className='link' onClick={event} id={id}>
                {children}
            </div>
        </NavLink>
    )
}
