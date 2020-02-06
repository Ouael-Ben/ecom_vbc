import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ListProduct from './ListProduct/ListProduct';
import ListProductBasket from './ListProductBasket/ListProductBasket';

export default function routes() {
    return (
        <Switch>
            <Route path='/products/' exact children={props => <ListProduct {...props} />} />
            <Route path='/products/basket' exact children={props => <ListProductBasket {...props} />} />
        </Switch>
    )
}
