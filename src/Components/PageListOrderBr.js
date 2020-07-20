import React, { Component } from 'react'
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import {
    MDBBtn,
    MDBModalHeader,
    MDBContainer,
    MDBModalBody,
    MDBModal,
    MDBModalFooter,
    MDBTable
  } from 'mdbreact';


class PageListOrderBr extends Component {
    constructor(props) {
        super(props)
        this.myGrid = React.createRef(JqxGrid);

        const source =
        {
            datafields: [
                { name:'id_product', type:'string'},
                { name:'name_product', type:'string'},
                { name:'type_product', type:'string'},   
                { name:'count_product', type:'number'},
                { name:'time_order', type:'string'},
                { name:'date_order', type:'string'}

            ],
            datatype: 'array',
            localdata:this.props.data
        };

        this.state = {
            columns:[
                { text:'รหัสสินค้า',datafield:'id_product', width: '15%', align: 'center',cellsalign:'left',editable:false},
                { text:'ชื่อสินค้า',datafield:'name_product', width: '25%', align: 'center',cellsalign:'left',editable:false},
                { text:'ประเภทสินค้า',datafield:'type_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'จำนวนการสั่งสินค้า (ชิ้น)',datafield:'count_product', width: '10%', align: 'center',cellsalign:'center',editable:true},
                { text:'เวลาสั่งสินค้า',datafield:'time_order', width: '15%', align: 'center',cellsalign:'left',editable:false},
                { text:'วันที่สั่งสินค้า',datafield:'date_order', width: '15%', align: 'center',cellsalign:'left',editable:false},

           
            ],
            source: new jqx.dataAdapter(source),
            model: false,
            config:[]
        }
      
    }
  
        
    
    render() {
        return (
            <>
                <JqxGrid
                    ref={this.myGrid}
                    width='100%'
                    height="700px"
                    source={this.state.source}
                    pageable={true}
                    pagesize={20}
                    autoheight={false}
                    columns={this.state.columns}
                    theme="metrodark"
                    editable={true}
                    enabletooltips={false}
                    selectionmode={'singlecell'}
                    editmode={'click'}
                    columnsresize={false}
                    sortable={true}
                    filterable={false}
                    showfilterrow={false}
                    onCellclick={this.onCellclick}
                
                />
            </>
        )
    }
}

export default PageListOrderBr
