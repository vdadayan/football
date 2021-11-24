import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './App.scss'
import {Header} from "./components/header/Header";
import {List} from "./components/list/List";

function App() {
    return (
        <div className="App">
            <Container>
                <Grid container spacing={3}>
                    <Grid item>
                        <Header/>
                    </Grid>
                    <Grid className='main' item>
                        main
                        <List/>
                    </Grid>
                    <Grid item>
                        Footer
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
