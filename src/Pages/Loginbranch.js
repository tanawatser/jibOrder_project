import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "../App.css";
import 'js-sha256';
import { sha256 } from "js-sha256";

class Loginbranch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: ''
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    if (this.state.username === '' || this.state.password === '') {
      alert("กรุณากรอกรหัสร้านหรือรหัสผ่านของคุณ");
    } else {
      let encode = sha256(this.state.password)
      fetch("http://172.18.9.55:3200/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          password:encode

        }),
      })
        .then((res) => res.json())
        .then((re) => {
          console.log(re.token);
          this.setState({ token: re.token });
        });
    }
    this.setState({
      username: '',
      password: '',
    });
  }
  render() {
    return (
    
        <MDBContainer className="box-container">
          <MDBRow>

            <MDBCol md="4"></MDBCol>

            <MDBCol md="4">
              <form className="form-login">
                <p className="h2 text-center mb-4">เข้าสู่ระบบ</p>
                <br />
                <div className="grey-text">
                  <MDBInput
                    autoFocus
                    className="form-control"
                    label="กรอกรหัสร้านสาขา"
                    icon="user-alt"
                    type="text"
                    value={this.state.username}
                    onChange={(e)=>{this.setState({username:e.target.value})}}
                     
                  />

                  <MDBInput
                    className="form-control"
                    label="กรอกรหัสผ่าน"
                    icon="lock"
                    type="password"
                    value={this.state.password}
                    onChange={(e)=>{this.setState({password:e.target.value})}}
                     
                  />
                </div>

                <div className="text-center">
                  <MDBBtn color="indigo" onClick={this.fetchData}>
                    Login
                  </MDBBtn>

                  <MDBBtn color="indigo">Exit</MDBBtn>
                </div>
                <center>
                <p style={{ fontSize: "15px" }}>{this.state.token}</p>
                </center>
                <img
                  className="pic-login"
                  src="https://cdn.shopify.com/s/files/1/1832/6341/products/ARTI_SUC_PT007_ASST_99_1024x1024.jpg?v=1571326179"
                />
              </form>
            </MDBCol>

            <MDBCol md="4"></MDBCol>
          </MDBRow>
        </MDBContainer>
      
    );
  }
}

export default Loginbranch;
