import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,

} from "mdbreact";
import "../Style/Loginstyle.css";
import "js-sha256";
import { sha256 } from "js-sha256";
import Logo from "../img/logo/logo.png";

class Loginbranch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      token: "",
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    if (this.state.username === "" || this.state.password === "") {
      alert("กรุณากรอกรหัสร้านหรือรหัสผ่านของคุณ");
    } else {
      let encode = sha256(this.state.password);
      fetch("http://172.18.9.55:3200/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          password: encode,
        }),
      })
        .then((res) => res.json())
        .then((re) => {
          console.log(re);
          this.setState({ token: re.token });
        });
    }
    this.setState({
      username: "",
      password: "",
    });
  }

  render() {
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} />
    );

    return (
      <div id="classicformpage" >
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation 
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <center>
                    <img className ="img-logo"src={Logo} />
                  </center>

                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody>
                      <br />
                        <h3 className="text-center" style={{ color: "black" }}>
                          เข้าสู่ระบบ
                        </h3>
                        <br />
                        <hr className="hr-light" />
                        <br />
                        <MDBInput
                          autoFocus
                          className="form-control"
                          label="รหัสผู้ใช้งาน"
                          icon="user"
                          type="text"
                          value={this.state.username}
                          onChange={(e) => {
                            this.setState({ username: e.target.value });
                          }}
                        />
                 
                        <MDBInput
                          className="form-control"
                          label="รหัสผ่าน"
                          icon="lock"
                          type="password"
                          value={this.state.password}
                          onChange={(e) => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                      
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultUnchecked"
                          />
                        </div>
                  

                        <div className="text-center mt-4 black-text">
                          <MDBBtn
                        
                            type="submit"
                            color="blue-grey"
                            onClick={this.fetchData}
                          >
                            Log in
                          </MDBBtn>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Loginbranch;
