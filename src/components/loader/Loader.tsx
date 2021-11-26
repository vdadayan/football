import React from "react";
import {Box, CircularProgress} from "@material-ui/core";

export const Loader = () => {
    return (
        <Box sx={{position: 'absolute', top: '50%', left: '50%'}}>
            <CircularProgress/>
        </Box>
    )
}