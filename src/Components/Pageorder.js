import React, { Component } from "react";
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

export default class Pageorder extends Component {
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
                
                // { name:'buy_product', type:'number'},
            ],
            datatype: 'array',
            localdata:this.props.data
        };
        this.state = {
            columns:[
                { text:'รหัสสินค้า',datafield:'id_product', width: '15%', align: 'center',cellsalign:'left',editable:false},
                { text:'ชื่อสินค้า',datafield:'name_product', width: '25%', align: 'center',cellsalign:'left',editable:false},
                { text:'ประเภทสินค้า',datafield:'type_product', width: '20%', align: 'center',cellsalign:'left',editable:false},
                { text:'จำนวนการสั่งสินค้า (ชิ้น)',datafield:'count_product', width: '13%', align: 'center',cellsalign:'center',editable:true,filterable:false},
                { text:'สั่งสินค้าได้สูงสุด (ชิ้น)',datafield:'limit_product', width: '13%', align: 'center',cellsalign:'center',editable:false,filterable:false},
                { text:'จัดการสินค้า',datafield:"view", width: '14%',columntype:"button",cellsrenderer:()=>{return 'สั่งสินค้า';}, align: 'center',editable:false,sortable:false,filterable:false},
            ],
            source: new jqx.dataAdapter(source),
            model: false,
            config:[]
        }
        this.onCellclick=this.onCellclick.bind(this)
    }
    onCellclick (e) {
        if(e.args.datafield==='view'){
            this.setState({
                config:[
                    {
                        id:this.props.data[e.args.rowindex].id_product,
                        name:this.props.data[e.args.rowindex].name_product,
                        count:this.props.data[e.args.rowindex].count_product,
                        limit:this.props.data[e.args.rowindex].limit_product
                    }
                ]
            })
            console.log(this.props.data[e.args.rowindex].id_product);
            this.toggle()
        }
        
    }
    toggle = ()=>{
        this.setState({
            model: !this.state.model
        })
        console.log('ON');
    }
    
  render() {
    return (
       <>
            <MDBModal isOpen={this.state.model} toggle={this.toggle} size="lg">
                <MDBModalHeader toggle={this.toggle}>ตรวจสอบรายการสั่งสินค้า</MDBModalHeader>
                <MDBContainer>
                    <br/>
                    {this.state.config.map((i)=>{
                        return (
                            <>
                            <MDBTable bordered>
                                <tr>
                                    <td><p style={{textAlign:'center',fontSize:'20px'}}>
                                        รหัสสินค้า
                                        </p>
                                    </td>
                                    <td>
                                        <input className='form-control' value={i.id} readOnly />
                                    </td>
                                </tr>

                                <tr>
                                    <td><p style={{textAlign:'center',fontSize:'20px'}}>
                                        ชื่อสินค้า
                                        </p>
                                    </td>
                                    <td>
                                        <input className='form-control' value={i.name} readOnly />
                                    </td>
                                </tr>

                                <tr>
                                    <td><p style={{textAlign:'center',fontSize:'20px'}}>
                                        สั่งสินค้าจำนวน (ชิ้น) *</p>
                                        </td><td><input className='form-control' value={i.count} readOnly /></td>
                                </tr>

                                <tr>
                                    <td><p style={{textAlign:'center',fontSize:'20px',color:'red'}}>
                                    สั่งสินค้าได้สูงสุด (ชิ้น)</p>
                                    </td><td><input className='form-control' value={i.limit} readOnly /></td>
                                </tr>
                            </MDBTable>
                            </>
                        )
                    })}
                </MDBContainer>
                <MDBModalBody>
                    *ควรสั่งสินค้าไม่เกินจำนวนการสั่งสูงสุด
                </MDBModalBody>
                <MDBModalFooter>

                <MDBBtn color="green" onClick={this.toggle}>
                    ยืนยัน
                    </MDBBtn>

                    <MDBBtn color="red" onClick={this.toggle}>
                    ยกเลิก
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>

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


       </>
    );
  }
}
