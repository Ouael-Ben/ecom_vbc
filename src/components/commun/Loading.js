import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme =>
  createStyles({
    fabProgress: {
      color: props => props.color
    },
    root: {
      textAlign: "center"
    }
  })
);
export default function Loading(props) {
  const classes = useStyles(props);
  const { isLoading, size } = props;
  return (
    <div className={classes.root}>
      {isLoading && (
        <CircularProgress size={size} className={classes.fabProgress} />
      )}
    </div>
  );
}
