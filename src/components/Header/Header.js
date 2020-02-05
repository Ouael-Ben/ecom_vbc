import React, { Fragment } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyMenu from '../Menu/MyMenu';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();
    const products = useSelector(state => state.Product);
    const {authenticated} = useSelector(state => state.Login);
    return (
        <Fragment>
            {
                    authenticated && <AppBar position="static" style={{marginBottom:10}}>
                                <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    E-Commerce
                                </Typography>
                                <MyMenu history={history} products={products}/>
                                </Toolbar>
                            </AppBar>
            }
        </Fragment>
        
    )
}
