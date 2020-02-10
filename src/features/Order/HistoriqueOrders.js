import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getAllOrders } from "./ressources/actions";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
function HistoriqueOrders() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.Order);

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Order #ID</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Statut</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(row => (
              <TableRow key={row.idOrder}>
                <TableCell component="th" scope="row">
                  {row.idOrder}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">${row.price}</TableCell>
                <TableCell align="right">Complèt</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
export default HistoriqueOrders;
