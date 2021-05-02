import React from "react";
import { Button } from "react-bootstrap";
import "./css/SignupPage.css";
import { useFormik } from "formik";
import { Redirect } from "react-router";
import { SubmitNewUserRequest, cowinapi } from "../../Utilities/ApiRequests";
export default (props) => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: (values) => {
      // console.log(values);
      // SubmitNewUserRequest(values)
      //   .then((resp) => {
      //     if (resp.status !== 200) {
      //       return new Error("Something went wront!");
      //     } else {
      //       alert("User created Successfully");
      //     }
      //   })
      //   .catch((err) => {
      //     alert(err);
      //   });
      cowinapi();
    }
  });
  return (
    <div className="signup-form-container">
      <form>
        <h3 className="signup-page-heading">Sign Up</h3>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstname"
          placeholder="eg. John"
          onChange={formik.handleChange}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastname"
          placeholder="eg. Trump"
          onChange={formik.handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="eg. johntr@xyz.com"
          onChange={formik.handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input type="password" name="password" onChange={formik.handleChange} />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
        />
        <br />
        <Button className="signup-button" onClick={formik.handleSubmit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
