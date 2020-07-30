import React, { Component } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
  <>
  <Navbar />
  <h1>HOMEPAGE</h1>
  <Footer />
  </>
    );
  }
}
