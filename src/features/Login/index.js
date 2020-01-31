import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';
import LoginForm from '../../components/LoginForm/LoginForm';


const useStyles = makeStyles(theme => ({
    root: {
        color: '#F7F7F7',
    },
    paper : {
        margin: theme.spacing(1),
    }
  }));
export default function LoginPage() {
    const classes = useStyles();
    return (
        <Box m={1} className={classes.root}>
            <Container>
                <Paper elevation={3} >
                    <Paper elevation={0} className={classes.paper}>
                        Logo
                        <LoginForm />
                    </Paper>
                </Paper>
            </Container> 
        </Box> 
    )
}
