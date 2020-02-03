import React from 'react'
import {BrowserRouter as Router,Switch, Route, useHistory} from 'react-router-dom';
import {Provider, useDispatch} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login  from '../Login';
import Register from '../Register';
import store from '../../config/store';
import ListProduct from '../Product/ListProduct/ListProduct';
import ProductRoute from '../Product/routes';
import Header from '../../components/Header/Header';

export default function Layout() {
    
    return (
        <Router>
             <Provider store={store}>
                <CssBaseline />
                <Route component={Header} />
                <Switch>
                    <Route path="/" exact component= {ListProduct} />
                    <Route path= '/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/products' children={props => <ProductRoute {...props} />} />

                    {/* <Route path='/perimetre' children={props => <PerimetreRoute {...props} />} exact /> */}

                </Switch>
            </Provider>
        </Router>
    )
}