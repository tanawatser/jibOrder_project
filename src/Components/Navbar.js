import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBContainer,
  MDBFormInline,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse

} from "mdbreact";


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
   
    return (
        
        <Router>
          <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">ระบบสั่งสินค้า</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/">หน้าหลัก</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/order">สั่งสินค้า</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="!#">รายการที่สั่งสินค้า</MDBNavLink>
            </MDBNavItem>
             
            </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>
        </Router>
    
    );
  }
}

export default Navbar;
