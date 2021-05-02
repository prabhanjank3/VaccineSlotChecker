import React, { Component } from "react";
import TestComponent from "../component/TestComponent";
import Navbar from "../container/Navbar/Navbar";
import "./css/TestContainer.css";
import { connect } from "react-redux";
import Signupform from "../component/Authentication/SignupPage";
class TestContainer extends Component {
  render() {
    return (
      <>
        {/* <section className="nav-section">
          <Navbar />
        </section>
        <section className="body-section"> */}
        <TestComponent testValue={this.props.testValue}></TestComponent>
        {/* <Signupform />
        </section>
        <section className="footer-section"></section> */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(TestContainer);
