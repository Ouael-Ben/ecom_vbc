import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import withAuthenticated from '../../../components/HOC/Authenticated';
import Card from '../../../components/Card/Card';
import { Grid, Container } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import Loading from '../../../components/commun/Loading';
import { getAllProducts } from '../ressources/actions';
import ReactPaginate from 'react-paginate';

function ListProduct() {
    const [offset, setOffset] = useState(0);
    
    const dispatch = useDispatch();
    const {isLoading, products,totalRows} = useSelector(state => state.Product);
    
    const handlePageClick = data => {
        console.log(data);
        return;
        let selected = data.selected;
        const page = Math.ceil(selected * 10);
        setOffset(page);
        dispatch(getAllProducts(page))
      };
    useEffect(() => {
        dispatch(getAllProducts());
    },[]);
    return (
        <Container >
             {isLoading ? 
                         <Loading isLoading = {true} size ={30} color="blue"/> : <Grid container spacing={3}>
                    {
                        products.map(product => {
                            return (
                                <Grid item xs={3}>
                                    <Card key={product.id} product={product} />
                                </Grid>
                            );
                        })
                    
                    }
                    <Grid item xs={12}>
                        {/* <Pagination
                            limit={10}
                            offset={offset}
                            total={totalRows}
                            onClick={(e, offset) => handleClick(offset)}
                            /> */}
                            {/* <ReactPaginate
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={totalRows}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination'}
                                    subContainerClassName={'pages pagination'}
                                    activeClassName={'active'}
                            /> */}
                    </Grid>
                </Grid>
             }
        </Container>
       
    )
}

export default withAuthenticated(ListProduct);
