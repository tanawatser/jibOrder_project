import React, { Component } from 'react'
import PageBr from '../Components/PageBr'

class ManageBr extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:[
                { branch_name:'[1]่jib_a'},
                { branch_name:'[2]่jib_b'},
                { branch_name:'[3]่jib_c'},
                { branch_name:'[4]่jib_d'},
                { branch_name:'[5]่jib_e'},
                { branch_name:'[6]่jib_f'},
                { branch_name:'[7]่jib_g'},
                { branch_name:'[8]่jib_h'},
                { branch_name:'[9]่jib_i'},
                { branch_name:'[10]่jib_j'},
              ]
        }
    }

    render() {
        return (
            <div>
                Manage branch
                <PageBr data={this.state.data} />
            </div>
        )
    }
}

export default ManageBr
