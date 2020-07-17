import React, { Component } from 'react'
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";


class ManageLi extends Component {
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
                { text:'รหัสสินค้า',datafield:'id_product', width: '10%', align: 'center',cellsalign:'left',editable:false},
                { text:'ชื่อสินค้า',datafield:'name_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'ประเภทสินค้า',datafield:'type_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'จำนวนการสั่ง (ชิ้น)',datafield:'count_product', width: '13%', align: 'center',cellsalign:'center',editable:true,filterable:false},
                { text:'สั่งได้สูงสุด (ชิ้น)',datafield:'limit_product', width: '13%', align: 'center',cellsalign:'center',editable:false,filterable:false},
                { text:'สินค้าในคลังทั้งหมด',datafield:'stock_product', width: '13%', align: 'center',cellsalign:'center',editable:false,filterable:false},
                { text:'จัดการสินค้า',datafield:"view", width: '11%',columntype:"button",cellsrenderer:()=>{return 'สั่งสินค้า';}, align: 'center',editable:false,sortable:false,filterable:false},
            ],
            source: new jqx.dataAdapter(source),
            model: false,
            config:[]
        }
    }
    render() {
        return (
            <div>
                Manage List
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

export default ManageLi
