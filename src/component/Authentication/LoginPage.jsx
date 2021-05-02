import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./css/LoginPage.css";
import { useFormik } from "formik";
export default (props) => {
  const formik = useFormik({
    initialValues: {
      pincode: "",
      vaccine_date: new Date(),
      user_email: ""
    },
    onSubmit: (values) => {
      // console.log(values);
      var date = new Date(values.vaccine_date);
      var datefr =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      values = {
        ...values,
        date: datefr
      };
      // console.log(values);
      props.handleSubmit(values);
    }
  });
  return (
    <section>
      <Form className="initial-form">
        <h3 className="form-heading text-center">
          Vaccine Availability Checker (18-44)
        </h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Pincode</Form.Label>
          <Form.Control
            name="pincode"
            type="text"
            className="form-control"
            placeholder="Enter pincode"
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Preferred Date</Form.Label>
          <Form.Control
            name="vaccine_date"
            type="date"
            className="form-control"
            placeholder="Enter pincode"
            defaultValue={formik.initialValues.vaccine_date}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control
          name="user_email"
          type="email"
          className="form-control"
          placeholder="Enter Email"
          defaultValue={formik.initialValues.user_email}
          onChange={formik.handleChange}
        />
        <Button
          variant="primary"
          type="submit"
          className="btn btn-dark btn-lg btn-block check-btn"
          onClick={formik.handleSubmit}
        >
          Submit
        </Button>
      </Form>
      <Alert variant="success">
        <p>
          Data on this application is fetched from official COWIN API's provided
          by government.
        </p>
        <hr />
        <p>Data is updated periodically every 30 seconds</p>
      </Alert>
    </section>
  );
};
