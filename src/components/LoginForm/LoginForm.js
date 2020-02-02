import React, { Fragment } from 'react'
import { TextField, Fab, Typography, Box } from '@material-ui/core'
import MyButton from '../commun/Button';
import {Link} from 'react-router-dom';
import * as PropTypes from 'prop-types';

function LoginForm({error, isLoading, OnInputChange, OnSubmit }) {
    return (
        <Fragment>
            <form>
                <TextField id="login" 
                        name="login" 
                        label="Login" 
                        type="text" 
                        variant="outlined" 
                        inputProps={{style: {height: 3}}}
                        InputLabelProps={{
                            style:{
                                fontSize: 11
                            }
                          }}
                        fullWidth
                        margin="normal"
                        onChange={(e) => OnInputChange(e)}
                />
                
                <TextField id="password" 
                        name="password" 
                        label="Password" 
                        type="password" 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                        inputProps={{style: {height: 3}}}
                        InputLabelProps={{
                            style:{
                                fontSize: 11
                            }
                          }}
                        onChange={(e) => OnInputChange(e)}
                />
                <Typography variant="subtitle2" style={{color: 'red'}}>{error}</Typography>
                <MyButton nameButton="Login" isLoading={isLoading} onClick = {OnSubmit} />
                <Box >
                    <Typography variant="subtitle1" style={{display: 'inline-block'}}>
                            New User?&nbsp;
                    </Typography>
                    <Typography variant="subtitle1" style={{display:'inline-block'}}>
                            <Link to="/register" style={{textDecoration: 'none',color:'blue'}}>Create Account</Link> 
                    </Typography>
                </Box>
               
            </form>
        </Fragment>
    )
}


LoginForm.propTypes = {
    OnInputChange: PropTypes.func.isRequired,
    OnSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
  };
  
export default LoginForm;
