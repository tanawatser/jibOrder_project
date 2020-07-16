import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

class App extends Component {
  state = {
    collapseID: "",
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  out() {
    localStorage.removeItem("name");
    window.location.href = "/";
  }

  render() {
    return (
      <Router>
        <MDBNavbar
          color = "default-color"
          dark
          expand="md"
          style={{
          
            fontSize: "18px",
            textShadow: "3px 3px 8px black",
            width: "100%",
          
          }}
        >
          <MDBNavbarBrand>
            <strong className="white-text">ระบบการสั่งสินค้าของสาขา</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

  
        <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Branch</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Company</MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>
        <Routes />
      </Router>
    );
  }
}

export default App;
