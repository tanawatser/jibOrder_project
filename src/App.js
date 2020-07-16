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
           <MDBNavLink to="#!">
           <img src="http://172.18.0.30/main2015/images/logo-jib-2015-w.png"
              style={{width:'50px'}} 
           />
           </MDBNavLink>
          <MDBNavbarBrand>
            <strong className="white-text">ระบบการสั่งสินค้าของสาขา</strong>
          </MDBNavbarBrand>
            </MDBNavbar>
        <Routes />
      </Router>
    );
  }
}

export default App;
