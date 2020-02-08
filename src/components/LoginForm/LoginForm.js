import React, { Fragment } from "react";
import { Fab, Typography, Box } from "@material-ui/core";
import MyButton from "../commun/Button";
import { Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { TextField } from "formik-material-ui";
import { Formik, Form } from "formik";

function LoginForm({ error, isLoading, OnSubmit }) {
  return (
    <Fragment>
      <Formik
        initialValues={{
          login: "",
          password: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.login) errors.login = "Required";
          if (!values.password) errors.password = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          OnSubmit({ ...values });
          setSubmitting(false);
        }}
      >
        {({ submitForm, errors, isSubmitting }) => (
          <Form>
            <TextField
              id="login"
              name="login"
              label="Login"
              type="text"
              variant="outlined"
              inputProps={{ style: { height: 3 } }}
              InputLabelProps={{
                style: {
                  fontSize: 11
                }
              }}
              fullWidth
              margin="normal"
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              inputProps={{ style: { height: 3 } }}
              InputLabelProps={{
                style: {
                  fontSize: 11
                }
              }}
            />
            <Typography variant="subtitle2" style={{ color: "red" }}>
              {error}
            </Typography>
            <MyButton
              nameButton="Login"
              isLoading={isLoading}
              onClick={submitForm}
            />
            <Box>
              <Typography
                variant="subtitle1"
                style={{ display: "inline-block" }}
              >
                New User?&nbsp;
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ display: "inline-block" }}
              >
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Create Account
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

LoginForm.propTypes = {
  OnSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

export default LoginForm;
