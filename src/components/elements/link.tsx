import React, {FC} from "react";

type LinkType = {
    children: any
    event: any
    id: string
}

export const Link:FC <LinkType> = ({children, event, id}) => {
    return (
        <div className='link' onClick={event} id={id}>
            {children}
        </div>
    )
}
