import React from "react";
import { cowinapi } from "../Utilities/ApiRequests";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./componentStyle.css";
export default (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Center Name</th>
            <th>Block Name</th>
            <th>Pincode</th>
            <th>Availability</th>
            <th>Vaccine</th>
            <th>Min. Age</th>
          </tr>
        </thead>
        <tbody>
          {props.session.length === 0 ? (
            <tr lg={"12"}>
              <td>No Available slot found</td>
            </tr>
          ) : (
            props.session.map((item) => {
              return item.min_age_limit === 18 ? (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.block_name}</td>
                  <td>{item.pincode}</td>
                  <td>{item.available_capacity}</td>
                  <td>{item.vaccine}</td>
                  <td>{item.min_age_limit}</td>
                </tr>
              ) : (
                <></>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};
