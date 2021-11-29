import React from "react";
import {Box, CircularProgress} from "@material-ui/core";

export const Loader = () => {
    return (
        <div className='loader'>
            <Box sx={{position: 'absolute', top: '50%', left: '50%'}}>
                <CircularProgress/>
            </Box>

        </div>
    )
}