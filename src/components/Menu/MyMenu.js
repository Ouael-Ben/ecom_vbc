import React,{Fragment} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, IconButton, Badge } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/Login/ressources/actions';
const useStyles = makeStyles((theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
    
  }),
);


function MyMenu({history}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleLogout = (history) =>  {
        console.log(history);
        dispatch(logoutUser(history));
    }
    
    return (
        <div>
             <Link to='/products' className={classes.link}>
                <Button color='inherit' className={classes.menuButton} >
                    Products
                </Button>
            </Link>
            <Link to='/products' className={classes.link}>
                <Button color='inherit' className={classes.menuButton} >
                    Orders
                </Button>
            </Link>
            <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => handleLogout(history)}>
                <PowerSettingsNew />
            </IconButton>
        </div>
    )
}
export default MyMenu;

