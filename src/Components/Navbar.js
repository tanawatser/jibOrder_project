import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
} from "mdbreact";
import "../Style/Navbarstyle.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const overlay = (
        <div
          id="sidenav-overlay"
          style={{ backgroundColor: "transparent" }}
          onClick={this.handleTogglerClick}
        />
      );
    return (
        <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
            dark
              expand="md"
              fixed="top"
              scrolling
              transparent
              color="default-color"
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">ระบบสั่งสินค้าสำหรับสาขา</strong>
                </MDBNavbarBrand>
             
    
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
               
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar;
