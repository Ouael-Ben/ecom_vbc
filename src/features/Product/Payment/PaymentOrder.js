import React, { useState } from 'react'
import withAuthenticated from '../../../components/HOC/Authenticated';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PaymentForm from '../../../components/PaymentForm/PaymentForm';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {useDispatch, useSelector} from 'react-redux';
import { paymentOrder } from '../ressources/actions';
import {useHistory} from 'react-router-dom';
import {sumBy} from 'lodash';
const useStyles = makeStyles(theme => ({
    paper : {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        textAlign: 'center',
        width: 600
    },
    error: {
        color: 'red'
      }
  }));
function PaymentOrder() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const {itemsInBasket} = useSelector(state => state.Product);
    const [payment, setPayment] = useState({
        nameOnCard: '',
        cardNumber: '',
        expiryDate: '',
        securityCode: '',
        zipCode: ''
    });
    const handleSubmit = (values) => {
        dispatch(paymentOrder(values));
    }
    const totalAmount = sumBy(itemsInBasket,'price');
    return (
        
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>

            <Grid item >
                <Paper elevation={3} className={classes.paper}>
                    <Typography >
                        <CreditCardIcon />
                    </Typography>
                    <Typography variant="subtitle1">
                        Payment Amount:<br/>
                        $ {totalAmount}
                    </Typography>
                    <Paper elevation={0} >
                        <PaymentForm  payment={payment} 
                                      handleSubmit={handleSubmit}
                                      orders ={itemsInBasket}/>

                    </Paper>
                </Paper>
            </Grid>   

        </Grid> 
    )
}
export default withAuthenticated(PaymentOrder)
