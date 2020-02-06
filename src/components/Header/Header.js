import React, { Fragment, useEffect } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyMenu from '../Menu/MyMenu';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllBasket } from '../../features/Product/ressources/actions';

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
    const dispatch = useDispatch();
    const {countItemBasket} = useSelector(state => state.Product);
    const {authenticated} = useSelector(state => state.Login);
    useEffect(() => {
      dispatch(getAllBasket());
    }, [])
    return (
        <Fragment>
            {
                    authenticated && <AppBar position="static" style={{marginBottom:10}}>
                                <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    E-Commerce
                                </Typography>
                                <MyMenu history={history} total={countItemBasket}/>
                                </Toolbar>
                            </AppBar>
            }
        </Fragment>
        
    )
}
