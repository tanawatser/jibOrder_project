import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

class Listpage extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <h1>List product</h1>
                <Footer />
          </>
        )
    }
}

export default Listpage
