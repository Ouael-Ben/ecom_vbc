import React from 'react'
import { Provider, useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from '../../config/store'
import Navigation from '../../Navigation'

export default function Layout() {

    return (
        <Provider store={store}>
            <CssBaseline />
            <Navigation />
        </Provider>
    )
}