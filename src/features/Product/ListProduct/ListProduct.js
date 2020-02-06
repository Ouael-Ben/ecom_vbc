import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import withAuthenticated from '../../../components/HOC/Authenticated';
import Card from '../../../components/Card/Card';
import { Grid, Container } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import Loading from '../../../components/commun/Loading';
import { getAllProducts, addToBasket } from '../ressources/actions';

function ListProduct() {
    const [offset, setOffset] = useState(1);
    
    const dispatch = useDispatch();
    const {isLoading, products,totalRows} = useSelector(state => state.Product);
    const handleClick = (offset) => {
        
        const page = offset / 10;
        dispatch(getAllProducts(page))
        setOffset(offset-10);
    }
    useEffect(() => {
        dispatch(getAllProducts());
    },[]);

    const addProductToBasket = (id) => {
        alert(id);
        dispatch(addToBasket(id));
    }
    return (
        <Container >
             {isLoading ? 
                         <Loading isLoading = {true} size ={30} color="blue"/> : <Grid container spacing={3}>
                    {
                        products.map(product => {
                            return (
                                <Grid item xs={3}>
                                    <Card key={product.id} product={product} onAddBasket = {() => {addProductToBasket(product.id)}}/>
                                </Grid>
                            );
                        })
                    
                    }
                    <Grid item xs={12}>
                        <Pagination
                            limit={10}
                            offset={offset}
                            total={totalRows}
                            onClick={(e, offset) => handleClick(offset+10)}
                            />
                    </Grid>
                </Grid>
             }
        </Container>
       
    )
}

export default withAuthenticated(ListProduct);
