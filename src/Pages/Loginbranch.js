import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import '../App.css'

class Loginbranch extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                       
        <MDBContainer className="box-container"> 
        
        <MDBRow>

          <MDBCol md="4">
          </MDBCol>

            
          <MDBCol md="4"  >
            <form className="form-login">
              <p className="h2 text-center mb-4">เข้าสู่ระบบสั่งสินค้า</p>
              <br />
              <div className="grey-text">
                <MDBInput
                  label="กรุณากรอกรหัสร้านสาขา"
                  icon="user-alt"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="กรุณากรอกรหัสผ่านของคุณ"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              

              <div className="text-center">
                <MDBBtn color="indigo">Login</MDBBtn>

                <MDBBtn color="indigo">Exit</MDBBtn>
              </div>
     
              <img className="pic-login" src="https://cdn.shopify.com/s/files/1/1832/6341/products/ARTI_SUC_PT007_ASST_99_1024x1024.jpg?v=1571326179" />

            </form>
           
          </MDBCol>

          <MDBCol md="4">
            </MDBCol>

        </MDBRow>
      </MDBContainer>
                
            </div>
        )
    }
}

export default Loginbranch
