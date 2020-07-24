import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Components/Navbar";

class App extends Component {
  state = {
    collapseID: "",
    isOpen: false,
  };


  render() {
   
    return (
       
        <Router>
        
          <Routes />
     
        </Router>


    );
  }
}

export default App;
