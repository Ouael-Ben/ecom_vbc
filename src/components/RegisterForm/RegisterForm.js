import React, { Fragment } from 'react'
import { TextField} from '@material-ui/core'
import MyButton from '../commun/Button';

export default function RegisterForm() {
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
                />
                <MyButton nameButton="Register" isLoading ={true} />
               
            </form>
        </Fragment>
        
    )
}
