import React, { Component } from "react";
import { connect } from "react-redux";
import SignupFormComponent from "../../component/Authentication/SignupPage";

class Signup extends Component {
  render() {
    return <SignupFormComponent />;
  }
}

export default Signup;
