import React, { Component } from 'react'
import {Container, Grid} from '@material-ui/core';

import Navbar from '../../components/navigation/navbar.component';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
                </Container>
            </div>
        )
    }
}

export default Home;