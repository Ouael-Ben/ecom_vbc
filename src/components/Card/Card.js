import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 245
  },
  media: {
    height: 140
  },
  content: {
    height: 200
  }
});
export default function MyCard({ product, onAddBasket }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.picsum.photos/id/27/200/300.jpg"
          title={product.designation}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.designation}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onAddBasket}>
          Ajouter au panier
        </Button>
        <Box>
          <Typography variant="h6" color="primary" fontWeight="fontWeightBold">
            {product.price}
            <AttachMoneyIcon style={{ position: "relative", top: 5 }} />
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}
