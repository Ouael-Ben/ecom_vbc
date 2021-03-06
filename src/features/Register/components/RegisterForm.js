import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import MyButton from "../../../components/commun/Button";
import { TextField } from "formik-material-ui";
import { Formik, Form } from "formik";

export default function RegisterForm({
  error,
  isLoading,
  OnInputChange,
  OnSubmit
}) {
  return (
    <Fragment>
      <Formik
        initialValues={{
          fullName: "",
          login: "",
          password: "",
          confirmPassword: ""
        }}
        validate={values => {
          const errors = {};

          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Please check your password again";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          OnSubmit({ ...values, setFieldError });
          setSubmitting(false);
        }}
      >
        {({ submitForm, errors, isSubmitting }) => (
          <Form>
            {console.log(errors)}
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
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
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="confirm Password"
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
              nameButton="Register"
              isLoading={isLoading}
              onClick={submitForm}
            />
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}
