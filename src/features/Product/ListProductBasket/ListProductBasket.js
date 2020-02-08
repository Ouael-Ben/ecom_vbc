import React, { useEffect, useState } from 'react'
import { Paper, Card, CardContent, CardActions, Button, Typography, Container, Grid } from '@material-ui/core';
import MaterialTable from 'material-table';
import withAuthenticated from '../../../components/HOC/Authenticated';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBasket, removeProductBasket } from '../ressources/actions';
import {sumBy} from 'lodash';
import MyButton from '../../../components/commun/Button';
import FormDialog from '../../../components/Dialog/FormDialog';
import {useHistory} from 'react-router-dom';

function ListProductBasket(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [openPaymenDialog, setOpenPaymenDialog] = useState(false);
    const handleClickOpen = () => {
        history.push('/products/order');
    };
    useEffect(() => {
        
        console.log(history);
    }, [])
    const handleClose = () => {
        setOpenPaymenDialog(false);
    };
    const handleSubmit = () => {
        setOpenPaymenDialog(false);
    }
    const {itemsInBasket, isLoading} = useSelector(state => state.Product);
    useEffect(() => {
        dispatch(getAllBasket());
    }, []);

    const onRemoveProduct = (id) => {
        dispatch(removeProductBasket(id));
    }
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
                                        onRemoveProduct(rowData.idLigneOrder);
                                      },
                                      
                                    },
                                   
                                  ]}
                                  
                            
                            />
                            
                            </CardContent>
                            <CardActions style={{ justifyContent: "flex-end" }}>
                                <Typography  style={{ marginRight: 10 }}>
                                Total: ${sumBy(itemsInBasket,'price')}            
                                </Typography>
                                <MyButton nameButton="Payment" onClick={handleClickOpen} disabled={itemsInBasket.length === 0 ? true: false} /> 
                            </CardActions>
                        </Card>

                    </Grid>
                </Grid>
                <FormDialog open={openPaymenDialog} 
                            handleClose={handleClose} 
                            handleSubmit={handleSubmit}/> 
        </Container>
    )
}

export default withAuthenticated(ListProductBasket)
