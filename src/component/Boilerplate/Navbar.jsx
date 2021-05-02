import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./css/Navbar.css";
import { Link, Redirect } from "react-router-dom";
export default (props) => {
  console.log(props);
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Navbar.Brand href="#" onClick={props.auth_info.homeClick}>
        Home
      </Navbar.Brand>{" "}
      <Nav className="mr-auto"></Nav>
      <Form inline></Form>
    </Navbar>
  );
};
