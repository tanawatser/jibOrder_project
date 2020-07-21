import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Routes from "./Routes";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,

  } from "mdbreact";
  import Logo from './img/logo/logo.png'

class App extends Component {
  state = {
    collapseID: "",
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Router>
        <MDBNavbar className="top-navbar" color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <NavLink to='/' >
          <img 
            src={Logo}
            width='70'
            waves
            style={{margin:'4rem'}}/>

          </NavLink>
          <strong className="white-text">สั่งสินค้าสำหรับร้านสาขา</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
        <Routes />
      </Router>
    );
  }
}

export default App;
