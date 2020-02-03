import React, { Fragment } from 'react'
import { TextField, Typography} from '@material-ui/core'
import MyButton from '../commun/Button';

export default function RegisterForm({error, isLoading, OnInputChange, OnSubmit }) {
    return (
        <Fragment>
            <form>
                <TextField id="fullName" 
                            name="fullName" 
                            label="Full Name" 
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
                 <TextField id="confirmPassword" 
                        name="confirmPassword" 
                        label="confirm Password" 
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
                <MyButton nameButton="Register" isLoading={isLoading} onClick = {OnSubmit} />
               
            </form>
        </Fragment>
        
    )
}
