import React, { Component } from "react";
import TestComponent from "../../component/TestComponent";
import Navbar from "../../component/Boilerplate/Navbar";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import LoginPageComponent from "../../component/Authentication/LoginPage";
import {
  AuthenticateUser,
  cowinapi,
  sendAlert
} from "../../Utilities/ApiRequests";
import NavbarContainer from "../Navbar/Navbar";
import { Redirect } from "react-router-dom";
import ItemRow from "../../component/display/itemrow";
class LoginPage extends Component {
  state = {
    isSubmitted: false,
    availableSlots: [],
    values: {}
  };
  handleSubmit = (values) => {
    // console.log("Values");
    // console.log(values);
    cowinapi(values)
      .then((resp) => {
        console.log("API Response");
        console.log(resp.data.centers);
        var sessionData = [];
        resp.data.centers.forEach((center) => {
          center.sessions.forEach((session) => {
            var temp = {
              ...session,
              ...center
            };
            sessionData.push(temp);
          });
        });
        console.log("SessionData");
        console.log(sessionData);
        for (var session of sessionData) {
          if (session.available_capacity !== 0) {
            sendAlert(values.user_email).then((resp) => {
              console.log("Email Sent");
              console.log(resp);
            });
            break;
          }
        }
        this.setState({
          ...this.state,
          isSubmitted: true,
          availableSlots: sessionData,
          values: values
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  homeClick = () => {
    this.setState({
      isSubmitted: false,
      availableSlots: [],
      values: {}
    });
  };
  render() {
    return (
      <div>
        <section className="nav-section">
          <NavbarContainer homeClick={this.homeClick} />
        </section>
        {true ? (
          <>
            {this.state.isSubmitted === false ? (
              <LoginPageComponent handleSubmit={this.handleSubmit} />
            ) : (
              <TestComponent session={this.state.availableSlots} />
            )}
          </>
        ) : this.state.availableSlots.length === 0 ? (
          <p>Hello</p>
        ) : (
          <></>
        )}
      </div>
    );
  }
  componentDidMount() {
    // setInterval(() => this.handleSubmit(this.state.values), 10000);

    setInterval(() => {
      // console.log("Refreshing");
      if (this.state.isSubmitted === true) {
        this.handleSubmit(this.state.values);
      }
    }, 30000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default LoginPage;
