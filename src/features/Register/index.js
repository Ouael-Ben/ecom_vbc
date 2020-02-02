import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Grid } from '@material-ui/core';
import Logo from '../../components/Logo/Logo';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const useStyles = makeStyles(theme => ({
    root: {
        color: '#F7F7F7',
    },
    paper : {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        textAlign: 'center',
        width: 600
    }
  }));
export default function RegisterPage() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>

            <Grid item >
                <Paper elevation={3} className={classes.paper}>
                    <Logo />
                    <RegisterForm />
                </Paper>
            </Grid>   

        </Grid> 
    )
}
