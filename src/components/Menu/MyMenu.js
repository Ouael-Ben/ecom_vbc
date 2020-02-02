import React,{Fragment} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, IconButton, Badge } from '@material-ui/core';
import {Link} from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew'
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


function MyMenu() {
    const classes = useStyles();

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
            <IconButton color="inherit" >
                <PowerSettingsNew />
            </IconButton>
        </div>
    )
}
export default MyMenu;

