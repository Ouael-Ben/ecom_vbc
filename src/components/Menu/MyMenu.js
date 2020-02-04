import React,{Fragment, useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, IconButton, Badge } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../features/Login/ressources/actions';
import AlertDialog from '../Dialog/AlertDialog';
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
    const [open, setOpen] = useState(false);
    console.log("aaaaaaaaaaaa",history)
    const handleLogout = (history) =>  {
        setOpen(true)
    }
    const message = `
    Vous êtes sur le point de quitter votre session et revenir à la page d'authentification
   
            Êtes-vous sûr de vouloir continuer ?

    `;
    const handleCloseDialog = () => {
        setOpen(false);
      };
    const handleConfirmLogout = (history) => {
        setOpen(false);
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
             <AlertDialog open={open} 
                         handleClose={handleCloseDialog} 
                         message={message}
                         handleConfirmLogout= {() => handleConfirmLogout(history)}/> 
        </div>
    )
}
export default MyMenu;

