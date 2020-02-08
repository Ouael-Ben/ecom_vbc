import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from 'formik-material-ui';
import { Formik, Form } from 'formik';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        width: 700
    }
  }),
);


export default function FormDialog({open,handleClose}) {
    const classes = useStyles();

  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
         
          </DialogContentText>
        
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
  );
}