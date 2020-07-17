import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './Routes'

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu


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
            // textShadow: "3px 3px 8px black",
            width: "100%",
          }}
        >
           <MDBNavLink to="/">
           <img src="http://172.18.0.30/main2015/images/logo-jib-2015-w.png"
              style={{width:'4rem'}} 
           />
           </MDBNavLink>
        
          <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
     

               <MDBNavbarNav left>
               <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret style={{marginRight:'2rem'}}>
                สาขา
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" >
                  <MDBDropdownItem href="/branch_order">สั่งซื้อสินค้า</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret >
                  <div className="d-none d-md-inline" ></div>
                  สำนักงานใหญ่
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" >
                  <MDBDropdownItem href="/manage_product">จัดการสินค้า</MDBDropdownItem>
                  <MDBDropdownItem href="/manage_branch">จัดการร้านสาขา</MDBDropdownItem>
                  <MDBDropdownItem href="/manage_stock">Stock สาขา</MDBDropdownItem>
                  <MDBDropdownItem href="/manage_list">รายการคำสั่งซื้อ</MDBDropdownItem>
                  <MDBDropdownItem href="/manage_cate">Group Category</MDBDropdownItem>
                  <MDBDropdownItem href="/manage_advance">การตั้งค่าระบบขั้นสูง</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
            


            <MDBNavbarNav right>
            <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon icon="fas fa-times-circle" style={{fontSize:'1.5rem'}} />
            </MDBNavLink>
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
