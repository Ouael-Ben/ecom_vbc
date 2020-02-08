import React from 'react'
import {BrowserRouter as Router,Switch, Route, useHistory} from 'react-router-dom';
import Login  from './features/Login';
import Register from './features/Register';
import ListProduct from './features/Product/ListProduct/ListProduct';
import ProductRoute from './features/Product/routes';
import Header from './components/Header/Header';
import HistoriqueOrders from './features/Order/HistoriqueOrders';
import Auth from './components/Auth'

export default function Navigation() {
    return (
        <Router>
        <Switch>
            <Route path='/register' exact component={Register} />
            <Route path= '/login' exact component={Login} />
            <Auth>

        <Header />
            <Route path="/" exact component= {ListProduct} />
            <Route path='/products' children={props => <ProductRoute {...props} />} />
            <Route path='/orders' exact component={HistoriqueOrders} />
            {/* <Route path='/perimetre' children={props => <PerimetreRoute {...props} />} exact /> */}
            </Auth>
        </Switch>
        </Router>
    )
}
