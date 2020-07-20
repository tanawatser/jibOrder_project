import React, { Component } from 'react'
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import '../Style/ManageAdStyle.css'


class ManageAd extends Component {
    constructor(){
        super();
        this.state = {time: new Date()}
    }
    
        currentTime()
        {
            this.setState ({
                time: new Date()
            })
    }

componentWillMount()
    {
        setInterval(()=>this.currentTime(),1000)
    }

    render() {
        return (
            <div className="main-container">
                <h1>Period time order</h1>
                <div className="clock" >
                   {this.state.time.toLocaleTimeString()}
                   </div>
                <img src="https://miro.medium.com/max/12000/1*ZHmVzQMBhlFmIdqAxtp00g.jpeg" />
              
                   
            </div>
        )
    }

}
export default ManageAd
