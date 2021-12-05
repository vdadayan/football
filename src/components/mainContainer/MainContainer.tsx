import React, {FC} from "react";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {Header} from "../header/Header";

type MainContainerType = {
    children: any
}

export const MainContainer: FC<MainContainerType> = ({children}) => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item>
                    <Header/>
                </Grid>
                <Grid className='main' item>
                    {children}
                </Grid>
                <Grid item>
                    Footer
                </Grid>
            </Grid>
        </Container>
    )
}
