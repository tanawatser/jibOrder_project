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

export default class PageBr extends Component {
    constructor(props){
        super(props);
        this.myGrid = React.createRef(JqxGrid);
        const source =
        {
            datafields: [
                { name:'branch_name', type:'string'},
            ],
            datatype: 'array',
            localdata:this.props.data
        };
        this.state = {
            columns:[
                { text:'สาขา',datafield:'branch_name', width: '80%', align: 'center',cellsalign:'left',editable:false},
                { text:'ตั้งค่าการแก้ไข',datafield:"edit",columntype:"button",cellsrenderer:()=>{return 'แก้ไข';}, width: '20%', align: 'center',editable:false,sortable:false,filterable:false},
            ],
            source: new jqx.dataAdapter(source),
            modal: false,
            config:[]
        }
        this.onCellclick=this.onCellclick.bind(this)
    }
    onCellclick(e) {
        if(e.args.datafield==='edit'){
            this.setState({
                config:[
                    {
                        id:this.props.data[e.args.rowindex].branch_name,
                        name:this.props.data[e.args.rowindex].product_name
                    }
                ]
            })
            console.log(this.props.data[e.args.rowindex].product_id);
            this.toggle()
        }
        
    }
    toggle = ()=>{
        this.setState({
          modal: !this.state.modal
        })
        console.log('ON');
    }
    
  render() {
    return (
       <>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
                <MDBModalHeader toggle={this.toggle}>ตั้งค่าสาขา</MDBModalHeader>
                <MDBContainer>
                    <br/>
                    {this.state.config.map((i)=>{
                        return (
                            <>
                            <MDBTable bordered>
                                 <tr>
                                    <td><p style={{textAlign:'center',fontSize:'20px'}}>ชื่อสาขา</p></td><td><input className='form-control' value={i.id} readOnly /></td>
                                </tr>
                            </MDBTable>
                            </>
                        )
                    })}
                </MDBContainer>
                <MDBModalBody>
                    แก้ไข
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="green" onClick={()=>{alert('บันทึกเรียบร้อย')}}>
                    ตกลง
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
                    editable={false}
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
