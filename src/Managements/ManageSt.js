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
                { name:'brand_id', type:'string'},
                { name:'name_branch', type:'string'},
                { name:'id_product', type:'string'},
                { name:'name_product', type:'string'},
                { name:'type_product', type:'string'},   
                { name:'stock_product', type:'string'},
                { name:'count_product', type:'number'},

         
                
                // { name:'buy_product', type:'number'},
     
                


            ],
            datatype: 'array',
            localdata:this.props.data
        };
        this.state = {
            columns:[
                { text:'รหัสสาขา',datafield:'branch_id', width: '10%', align: 'center',cellsalign:'left',editable:false},
                { text:'ชื่อสาขา',datafield:'branch_name', width: '10%', align: 'center',cellsalign:'left',editable:false},

                { text:'รหัสสินค้า',datafield:'id_product', width: '10%', align: 'center',cellsalign:'left',editable:false},
                { text:'ชื่อสินค้า',datafield:'name_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'ประเภทสินค้า',datafield:'type_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'จำนวนการสั่งสินค้า (ชิ้น)',datafield:'count_product', width: '13%', align: 'center',cellsalign:'center',editable:true,filterable:true},
                
                
           
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
