import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Logo from "../../components/Logo/Logo";
import RegisterForm from "./components/RegisterForm";
import { registerUser } from "./ressources/actions";
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
  }
}));
export default function RegisterPage() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({});
  const { error, isLoading } = useSelector(state => state.Register);

  useEffect(() => {
    if (AuthUtils.isAuth()) history.push("/");
  });
  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const handleSubmit = payload => {
    dispatch(registerUser(payload));
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
          <RegisterForm
            isLoading={isLoading}
            OnInputChange={handleInputChange}
            OnSubmit={handleSubmit}
            error={error}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
