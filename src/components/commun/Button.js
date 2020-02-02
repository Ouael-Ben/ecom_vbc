import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Fab } from '@material-ui/core';
import Loading from './Loading';

const useStyles = makeStyles(theme => ({
    btn: {
        margin : theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        width: 150
    },
    btnIcon: {
        marginLeft: theme.spacing(1),
        fontSize: 20
    }
}))
export default function MyButton({nameButton,isLoading,onClick}) {
    const classes = useStyles();
    return (
        <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        className={classes.btn}
        onClick ={onClick}
        >
            {
              !isLoading ?  <>{nameButton}
                    <ArrowForward   className={classes.btnIcon} />
                </>: <Loading isLoading = {true} size ={15} color="white"/>
            }
        </Fab>
    )
}
