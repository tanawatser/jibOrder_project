import React, { Component } from "react";
import Routes from '../Routes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse

} from "mdbreact";
import Authen from "../Components/Authen"


class Navbar extends Component {
  constructor(props) {
    super(props);

    this.Authen = new Authen();

    this.state = {
      isOpen: false
    };
    
  }

  render() {
   
    return (
        
<></>
    
    );
  }
}

export default Navbar;
