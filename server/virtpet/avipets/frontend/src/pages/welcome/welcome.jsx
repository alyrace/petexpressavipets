import React from 'react';
import Container from '@material-ui/core/Container';
import Login from '../../components/login/login.component';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import imgwelcomelg  from '../../images/aviwelcomebackground.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        height: '100vh',
        minHeight: '100vh', 
        backgroundImage: `url(${process.env.PUBLIC_URL + imgwelcomelg})`,
        backgroundPosition: 'left 100px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }, 
      [theme.breakpoints.up('md')]: {
        minHeight: '110vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + imgwelcomelg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
      [theme.breakpoints.up('lg')]: {
        height: '100vh',
        minHeight: '100vh', 
        backgroundImage: `url(${process.env.PUBLIC_URL + imgwelcomelg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
      },
      [theme.breakpoints.up('xl')]: {
        height: '100vh',
        minHeight: '100vh', 
        backgroundImage: `url(${process.env.PUBLIC_URL + imgwelcomelg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Welcome() {
    const classes = useStyles();
        return (
            <div className={classes.root}>
                <Container maxWidth="sm">
                    <div>
                        <Grid container direction="column" justify="center" alignItems="stretch" spacing={1}>
                            <Grid item xs={12}>
                                <Paper elevation="10" className={classes.paper}>
                                    <Login />
                                </Paper>
                            </Grid>          
                        </Grid>
                    </div>            
                </Container>
            </div>
        )
};

export default Welcome;
