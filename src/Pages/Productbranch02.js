import React, { Component } from "react";

export default class Productbranch02 extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { product_id:'001',product_name:'acer',product_type:'notebook',product_count:2458},
        { product_id:'002',product_name:'dell',product_type:'notebook',product_count:1240},
        { product_id:'003',product_name:'lenovo',product_type:'notebook',product_count:5620},
        { product_id:'004',product_name:'asus',product_type:'notebook',product_count:1124},
        { product_id:'005',product_name:'compaq',product_type:'notebook',product_count:201},
      ]
    }
  }

  render() {
    return (
       <>
       <center>
          <div style={{width:"80%"}}>
              <h1>หน้าจัดการสินค้า</h1><br/>
          </div>
        </center>
       </>
    );
  }
}
