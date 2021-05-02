import React from "react";
import {} from "react-bootstrap";
import "./css/LoginPage.css";
import { useFormik } from "formik";
export default (props) => {
  const formik = useFormik({
    initialValues: {
      pincode: "",
      vaccine_date: new Date()
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
      <section className="authform-box-section">
        <div className="authform-box-div">
          <form>
            <h3 className="form-heading text-center">
              Vaccine Availability Checker (18-44)
            </h3>

            <div className="form-group">
              <label>Pin Code</label>
              <input
                name="pincode"
                type="text"
                className="form-control"
                placeholder="Enter pincode"
                onChange={formik.handleChange}
              />
            </div>
            <input
              name="vaccine_date"
              type="date"
              className="form-control"
              placeholder="Enter pincode"
              defaultValue={formik.initialValues.vaccine_date}
              onChange={formik.handleChange}
            />
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block check-btn"
              onClick={formik.handleSubmit}
            >
              Check
            </button>
            {/* <p className="forgot-password text-center">
              Forgot <a href="#">password?</a>
            </p> */}
          </form>
        </div>
      </section>
    </section>
  );
};
