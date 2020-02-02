import React, { Fragment } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyMenu from '../Menu/MyMenu';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Header() {

    const classes = useStyles();
    const {authenticated} = useSelector(state => state.Login);
    return (
        <Fragment>
            {
                    authenticated && <AppBar position="static">
                                <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    E-User
                                </Typography>
                                <MyMenu />
                                </Toolbar>
                            </AppBar>
            }
        </Fragment>
        
    )
}
