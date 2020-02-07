import React, { useEffect } from 'react'
import { Paper, Card, CardContent, CardActions, Button, Typography, Container, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import withAuthenticated from '../../../components/HOC/Authenticated';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBasket } from '../ressources/actions';
import {sumBy} from 'lodash';

function ListProductBasket() {
    const disptach = useDispatch();
    const {itemsInBasket, isLoading} = useSelector(state => state.Product);
    useEffect(() => {
        disptach(getAllBasket());
    }, []);
    return (
        <Container >
                <Grid>
                    <Grid item xs={12}>
                        <Card elevation={0}>
                            <CardContent >
                            <MaterialTable 
                                isLoading = {isLoading}
                                title="Shopping Cart"
                                components={{
                                    Container: (props) => <Paper {...props} elevation={0} />
                                  }}
                                columns={[
                                    { title: 'Product', field: 'designation' },
                                    { title: 'Quantity', field: 'quantity', type: 'numeric' },
                                    { title: 'Price', field: 'price', type: 'currency',cellStyle:{textAlign: 'left'} },
                                  ]}   
                                  options={{
                                    actionsColumnIndex: -1,
                                    emptyRowsWhenPaging: false,
                                    paging: false,
                                    search: false,
                                    
                                  }} 

                                  data={itemsInBasket}
                                  actions={[
                                    {
                                      icon: () => <DeleteOutline />,
                                      tooltip: 'Delete Item(s)',
                                      onClick: (e, rowData) => {
                                        
                                      },
                                      
                                    },
                                   
                                  ]}
                                  
                            
                            />
                            
                            </CardContent>
                            <CardActions style={{ justifyContent: "flex-end" }}>
                                <Typography variant="title" style={{ marginRight: 10 }}>
                                Total: ${sumBy(itemsInBasket,'price')}            
                                </Typography>
                                <Button
                                variant="outlined"
                                color="primary"
                                style={{ textTransform: 'none' }}                        
                                >
                                Payment
                                </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                </Grid>
                
        </Container>
    )
}

export default withAuthenticated(ListProductBasket)
