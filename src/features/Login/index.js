import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Grid } from "@material-ui/core";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import { loginUser } from "./ressources/actions";
import AuthUtils from "../../utils/auth/isAuth";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#F7F7F7"
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    textAlign: "center",
    width: 600
  },
  error: {
    color: "red"
  }
}));
export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({});
  const { error, isLoading } = useSelector(state => state.Login);

  useEffect(() => {
    if (AuthUtils.isAuth()) history.push("/");
  });
  const handleSubmit = user => {
    dispatch(loginUser(user));
  };
  return (
    <Grid
      className={classes.root}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Paper elevation={3} className={classes.paper}>
          <Logo />
          <LoginForm
            isLoading={isLoading}
            OnSubmit={handleSubmit}
            error={error}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
