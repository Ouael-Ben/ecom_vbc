import React, { Fragment } from 'react'
import { TextField } from '@material-ui/core'

export default function LoginForm() {
    return (
        <Fragment>
            <form>
                <TextField id="login" 
                        name="login" 
                        label="Login" 
                        type="text" 
                        variant="outlined" 
                        inputProps={{style: {height: 5}}}
                />
                <TextField id="password" 
                        name="password" 
                        label="Password" 
                        type="password" 
                        variant="outlined" 
                />
            </form>
        </Fragment>
    )
}
