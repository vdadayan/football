import {useLocation} from "react-router-dom";

export const useLocationId = () => {
    const {pathname} = useLocation()
    const urlId = pathname.split('-').pop()
    return {urlId}
}
