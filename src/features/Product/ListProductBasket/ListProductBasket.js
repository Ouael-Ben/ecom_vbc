import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import MaterialTable from "material-table";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import sumBy from "lodash/sumBy";
import MyButton from "../../../components/commun/Button";
import { getAllBasket, removeProductBasket } from "../ressources/actions";

function ListProductBasket() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClickOpen = () => {
    history.push("/products/order", {
      page: "GO"
    });
  };

  const { itemsInBasket, isLoading } = useSelector(state => state.Product);
  useEffect(() => {
    dispatch(getAllBasket());
  }, []);

  const onRemoveProduct = id => {
    dispatch(removeProductBasket(id));
  };
  return (
    <Container>
      <Grid>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardContent>
              <MaterialTable
                isLoading={isLoading}
                title="Shopping Cart"
                components={{
                  Container: props => <Paper {...props} elevation={0} />
                }}
                columns={[
                  { title: "Product", field: "designation" },
                  { title: "Quantity", field: "quantity", type: "numeric" },
                  {
                    title: "Price",
                    field: "price",
                    type: "currency",
                    cellStyle: { textAlign: "left" }
                  }
                ]}
                options={{
                  actionsColumnIndex: -1,
                  emptyRowsWhenPaging: false,
                  paging: false,
                  search: false
                }}
                data={itemsInBasket}
                actions={[
                  {
                    icon: () => <DeleteOutline />,
                    tooltip: "Delete Item(s)",
                    onClick: (e, rowData) => {
                      onRemoveProduct(rowData.idLigneOrder);
                    }
                  }
                ]}
              />
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end" }}>
              <Typography style={{ marginRight: 10 }}>
                Total: ${sumBy(itemsInBasket, "price")}
              </Typography>
              <MyButton
                nameButton="Payment"
                onClick={handleClickOpen}
                disabled={itemsInBasket.length === 0 ? true : false}
              />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListProductBasket;
