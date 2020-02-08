import React, { Fragment } from 'react'
import { TextField } from 'formik-material-ui';
import { Formik, Form } from 'formik';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    inlineTextField : {
        width: '50%'
    }
  }));

export default function PaymentForm({payment,handleSubmit,orders}) {
    const classes = useStyles();
    return (
        <Fragment>
             <Formik
                    initialValues={{...payment}}
                    validate={values => {
                        const errors = {};
                        if (!values.nameOnCard) {
                        errors.nameOnCard = 'Required';
                        }
                        if (!values.cardNumber) {
                            errors.cardNumber = 'Required';
                        }
                        if(!values.expiryDate){
                            errors.expiryDate = 'Required';
                        } 
                        if(!values.securityCode){
                            errors.securityCode = 'Required';
                        }
                        if(!values.zipCode){
                            errors.zipCode = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                       const payment = {
                           payment: {...values},
                           order: [...orders]
                       }
                       handleSubmit(payment);
                       setSubmitting(false);
                    }}
            >
      {({ submitForm, isSubmitting }) => (
        <Form className={classes.root}>
          <TextField name="nameOnCard" type="text" label="Name on Card" fullWidth margin="normal"/>
          <br />
          <TextField type="text" label="Card Number" name="cardNumber" fullWidth margin="normal" />
          <br />
          <div>
            <TextField type="text" label="Expiry Date" name="expiryDate" placeholder="MM/YY" margin="normal" className={classes.inlineTextField}/>
            <TextField type="text" label="Security Code" name="securityCode" margin="normal" className={classes.inlineTextField}/>
          </div>
          <TextField type="text" label="Zip code" name="zipCode" fullWidth  margin="normal"/>

            <br/>
            <br/>
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
        </Fragment>
    )
}
