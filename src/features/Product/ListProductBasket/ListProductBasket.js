import React from 'react'
import { Paper, Card, CardContent, CardActions, Button, Typography, Container, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import withAuthenticated from '../../../components/HOC/Authenticated';

function ListProductBasket() {
    return (
        <Container >
                <Grid>
                    <Grid item xs={12}>
                        <Card elevation={0}>
                            <CardContent>
                            <MaterialTable 
                                title="Shopping Cart"
                                columns={[
                                    { title: 'Product', field: 'name' },
                                    { title: 'Quantity', field: 'quantity', type: 'numeric' },
                                    { title: 'Price', field: 'price', type: 'currency' },
                                  ]}   
                                  options={{
                                    actionsColumnIndex: -1,
                                    emptyRowsWhenPaging: false,
                                    paging: false,
                                    search: false
                                  }} 
                            
                            />
                            </CardContent>
                            <CardActions>
                                
                            </CardActions>
                        </Card>

                    </Grid>
                </Grid>
                
        </Container>
    )
}

export default withAuthenticated(ListProductBasket)
