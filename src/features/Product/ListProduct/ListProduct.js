import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import withAuthenticated from '../../../components/HOC/Authenticated';
import Card from '../../../components/Card/Card';
import { Grid, Container } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import Loading from '../../../components/commun/Loading';
import { getAllProducts } from '../ressources/actions';

function ListProduct() {
    const [offset, setOffset] = useState(0);
    const dispatch = useDispatch();
    const {isLoading, products} = useSelector(state => state.Product);
    const handleClick = (offset) => {
        setOffset(offset);
    }
    
    useEffect(() => {
        //dispatch(getAllProducts());
    })
    return (
        <Container >
             {isLoading ? <Loading isLoading = {true} size ={30} color="blue"/> : <Grid container spacing={3}>
                    {/* <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid>
                    <Grid item xs={3}>
                        <Card />
                    </Grid> */}
                    <Grid item xs={12}>
                        <Pagination
                            limit={10}
                            offset={offset}
                            total={100}
                            onClick={(e, offset) => handleClick(offset)}
                            />
                    </Grid>
                </Grid>
             }
        </Container>
       
    )
}

export default withAuthenticated(ListProduct);
