import React from 'react'
import {Switch, Route} from 'react-router-dom';
import ListProduct from './ListProduct/ListProduct';

export default function routes() {
    return (
        <Switch>
            <Route path='/products/' exact children={props => <ListProduct {...props} />} />
            {/* <Route path='/users/new' exact children={props => <AddUser {...props} />} /> */}
        </Switch>
    )
}
