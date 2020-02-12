import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Container, TextField } from "@material-ui/core";
import Pagination from "material-ui-flat-pagination";
import { getAllProducts, addToBasket } from "../ressources/actions";
import Card from "../../../components/Card/Card";
import Loading from "../../../components/commun/Loading";

export default () => {
  const [offset, setOffset] = useState(1);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { isLoading, products, totalRows } = useSelector(
    state => state.Product
  );
  const handleClick = offset => {
    const page = offset / 10;
    dispatch(getAllProducts(page));
    setOffset(offset - 10);
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const addProductToBasket = id => dispatch(addToBasket(id));
  let filtredProducts = products.filter(product =>
    product.designation.includes(searchText)
  );
  return (
    <Container>
      {isLoading ? (
        <Loading isLoading={true} size={30} color="blue" />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="outlined-search"
              label="Search Product..."
              type="search"
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />{" "}
          </Grid>
          {filtredProducts &&
            Array.isArray(filtredProducts) &&
            filtredProducts.map((product, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <Card
                    key={product.id}
                    product={product}
                    onAddBasket={() => {
                      addProductToBasket(product.id);
                    }}
                  />
                </Grid>
              );
            })}
          <Grid item xs={12}>
            <Pagination
              limit={10}
              offset={offset}
              total={totalRows}
              onClick={(e, offset) => handleClick(offset + 10)}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
