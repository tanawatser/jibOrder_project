import React, { Component } from "react";
import Pageorder from '../Components/Pageorder';

export default class Productbranch01 extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'001',name_product:'acer',type_product:'CPU',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},
        { id_product:'002',name_product:'asus',type_product:'VGA',discription_product:'notebook',price_product:'2458',warranty_product:'10',count_product:5,limit_product:'5',stock_product:'1200'},

  
      ]
    }
  }


  render() {
    return (
       <>
       <center>
          <div>
    
            <Pageorder data={this.state.data} />
          </div>
        </center>
       </>
    );
  }
}
