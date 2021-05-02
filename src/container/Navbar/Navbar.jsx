import React, { Component } from "react";
import NavbarComponent from "../../component/Boilerplate/Navbar";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    console.log(this.props);
    return <NavbarComponent auth_info={this.props} />;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    isAuthenticated: state.userReducer.isAuthenticated,
    firstname: state.userReducer.current_usr_info.firstname,
    lastname: state.userReducer.current_usr_info.lastname
  };
};
export default connect(mapStateToProps)(Navbar);
