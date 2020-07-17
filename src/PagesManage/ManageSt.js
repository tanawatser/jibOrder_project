import React, { Component } from 'react'
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";


class ManageSt extends Component {
    constructor(props){
        super(props);
        this.myGrid = React.createRef(JqxGrid);
        const source =
        {
            datafields: [
                { name:'id_product', type:'string'},
                { name:'name_product', type:'string'},
                { name:'type_product', type:'string'},   
                { name:'count_product', type:'number'},
                { name:'limit_product', type:'string'},
                { name:'stock_product', type:'string'},
         
                
                // { name:'buy_product', type:'number'},
     
                


            ],
            datatype: 'array',
            localdata:this.props.data
        };
        this.state = {
            columns:[
                { text:'รหัสร้านสาขา',datafield:'id_product', width: '10%', align: 'center',cellsalign:'left',editable:false},
                { text:'ชื่อสินค้า',datafield:'name_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'ประเภทสินค้า',datafield:'type_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'จำนวนสินค้าที่ร้านสาขาสั่งทั้งหมด (ชิ้น)',datafield:'count_product', width: '20%', align: 'center',cellsalign:'center',editable:true,filterable:false},
                { text:'สินค้าในคลังทั้งหมด (ชิ้น)',datafield:'stock_product', width: '15%', align: 'center',cellsalign:'center',editable:false,filterable:false},
               
           
            ],
            source: new jqx.dataAdapter(source),
            model: false,
            config:[]
        }

    }
    render() {
        return (
            <div>
                Stock Branch
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
                    filterable={true}
                    showfilterrow={true}
                    onCellclick={this.onCellclick}
                />
            </div>
        )
    }
}

export default ManageSt
