import {useLocation} from "react-router-dom";

type type = {
    urlId: string
}

export const useLocationId = () => {
    const {pathname} = useLocation()
    const urlId = pathname.split('-').pop()
    return <type>{urlId}
}
