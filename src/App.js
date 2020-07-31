import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router  } from "react-router-dom";
import Routes from "./Routes";
import Authen from "../src/Components/Authen"
import Login from "../src/Pages/Loginbranch"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFooter,
  MDBContainer
} from "mdbreact";

import Logo from "../src/img/logo/logo.png";


export default class App extends Component {
  
  constructor(props) {
    super(props) 
    this.Authen = new Authen(); 
    this.state = {
      isOpen: false
    };
    
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    return (
      <>
        <Router>
        {localStorage.getItem('access') ? (
          <div>
          <MDBNavbar className="top-nav" color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <img src={Logo} style={{width:'70px',marginRight:'1rem'}}/>

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
                <MDBNavLink to="/listproduct">รายการที่สั่งสินค้า</MDBNavLink>
              </MDBNavItem>
              </MDBNavbarNav>
              
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!">สวัสดี ,</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <div style={{color:'white'}}><MDBIcon icon="user"  size="3x"/></div>
              </MDBNavItem>
              <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav style={{width:'200px'}}>
                  <span className="mr-2" >{this.Authen.getProfile().fullname}</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={()=>{alert('Op1')}}>About</MDBDropdownItem>
                  <MDBDropdownItem onClick={()=>{
                    this.Authen.logout();
                    window.location.reload();
                    }}>Logout
                    </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
             </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>

         <Routes />

         <MDBFooter color="indigo" 
         style={{width:'100%', position:'fixed', bottom:'0px',marginTop:'auto'}}>
           <MDBContainer fluid className="text-center text-md-left"></MDBContainer>
           <div className="footer-copyright text-center py-3">
             <MDBContainer fluid>
               &copy; {new Date().getFullYear()} Copyright:{" "}
               <a href="https://www.jib.co.th/">JIB COMPUTER GROUP</a> All rights reserved
             </MDBContainer>
           </div>

         </MDBFooter>
         </div>
         ):(<Login />)}

      </Router>
        
      </>
    )
  }
}