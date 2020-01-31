import React from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login  from '../Login';
import Register from '../Register';

export default function index() {
    return (
        <Router>
            <CssBaseline />
            <Switch>
                <Route path= '/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
                {/* <Route path='/perimetre' children={props => <PerimetreRoute {...props} />} exact /> */}

            </Switch>

        </Router>
    )
}