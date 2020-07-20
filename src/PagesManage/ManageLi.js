import React, { Component } from 'react'
import PageLi from '../Components/PageLi'

import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";


class ManageLi extends Component {
    constructor(props){
        super(props);
        this.state={
          data:[
            { id_branch:'01',id_product:'3008526218',name_product:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',type_product:'Graphic Card',count_product:5,limit_product:10},
            { id_branch:'01',id_product:'3008526214',name_product:'VGA (การ์ดแสดงผล) GIGABYTE RX570 GAMING 8G DDR5 256 BIT GV-RX570GAMING-8GD (REV2.0) ',type_product:'Graphic Card',count_product:10,limit_product:10},
            { id_branch:'01',id_product:'0199002906',name_product:'CPU (ซีพียู) AMD AM4 RYZEN7 3800XT 3.9 GHz',type_product:'CPU',count_product:5,limit_product:10},
            { id_branch:'01',id_product:'0199002871',name_product:'CPU (ซีพียู) AMD AM4 RYZEN9 3950X 3.5 GHz',type_product:'CPU',count_product:5,limit_product:10},
            { id_branch:'01',id_product:'0201038090',name_product:'MAINBOARD (เมนบอร์ด) AM4 ASROCK B550 STEEL LEGEND',type_product:'Mainboard',count_product:10,limit_product:10},
            { id_branch:'01',id_product:'0201038074',name_product:'MAINBOARD (เมนบอร์ด) AM4 MSI MAG B550M MORTAR ',type_product:'Mainboard',count_product:5,limit_product:10},
            { id_branch:'01',id_product:'0320550483',name_product:'16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) G.SKILL SNIPER X (DIGITAL CAMO) (F4-3200C16D-16GSXKB)',type_product:'RAM For PC',count_product:5,limit_product:10},
            { id_branch:'01',id_product:'0320550472',name_product:'16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) CORSAIR DOMINATOR PLATINUM RGB (WHITE) (CMT16GX4M2Z3200C16W) ',type_product:'RAM For PC',count_product:5,limit_product:10},
            { id_branch:'01',id_product:'2310392952',name_product:'POWER SUPPLY (อุปกรณ์จ่ายไฟ) SILVERSTONE 750W STRIDER (80+ GOLD) (SST-ST75F-GS) V3.0 ',type_product:'Power Supply',count_product:10,limit_product:10},
            { id_branch:'01',id_product:'2310392949',name_product:'POWER SUPPLY (อุปกรณ์จ่ายไฟ) ANTEC 650W ATOM B650 (80+ BRONZE)',type_product:'Power Supply',count_product:10,limit_product:10},
          ],
    
        }

        }
  
    render() {
        return (
            <div>
                <PageLi data={this.state.data} />
            </div>
        )
    }
}

export default ManageLi
