import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ListProduct from './ListProduct/ListProduct';
import ListProductBasket from './ListProductBasket/ListProductBasket';
import PaymentOrder from './Payment/PaymentOrder';

export default function routes() {
    return (
        <Switch>
            <Route path='/products/' exact children={props => <ListProduct {...props} />} />
            <Route path='/products/basket' exact children={props => <ListProductBasket {...props} />} />
            <Route path='/products/order' exact children={props => <PaymentOrder {...props} />} />

        </Switch>
    )
}
