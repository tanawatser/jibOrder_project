import React, { Component } from "react";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

export default class Orderpage extends Component {
  constructor(props) {
    super(props);
    this.myGrid = React.createRef(JqxGrid);
    const source = {
      datafields: [
        { name: "product_id", type: "string" },
        { name: "product_name", type: "string" },
        { name: "product_type", type: "string" },
        { name: "product_count", type: "number" },
        { name: "product_limit", type: "number" },
      ],
      datatype: "array",
      localdata: this.props.data,
    };
    this.state = {
      columns: [
        {
          text: "Image",
          datafield: "pic",
          columntype: "button",
          cellsrenderer: () => {
            return "รูป";
          },
          width: "10%",
          align: "center",
          editable: false,
          sortable: false,
          filterable: false,
        },
        {
          text: "Product_id",
          datafield: "product_id",
          width: "15%",
          align: "center",
          cellsalign: "center",
          editable: false,
        },
        {
          text: "Product Name",
          datafield: "product_name",
          width: "25%",
          align: "center",
          cellsalign: "left",
          editable: false,
        },
        {
          text: "Category",
          datafield: "product_type",
          width: "15%",
          align: "center",
          cellsalign: "center",
          editable: false,
        },
        {
          text: "Stock count",
          datafield: "product_count",
          width: "15%",
          align: "center",
          cellsalign: "center",
          editable: false,
          filterable: false,

        },
        {
          text: "Product Limit",
          datafield: "product_limit",
          width: "10%",
          align: "center",
          cellsalign: "center",
          filterable: false,

          editable: false,
        },
        {
          text: "Buy",
          datafield: "edit",
          columntype: "button",
          cellsrenderer: () => {
            return "สั่งสินค้า";
          },
          width: "10%",
          align: "center",
          editable: false,
          sortable: false,
          filterable: false,
        },
      ],
      source: new jqx.dataAdapter(source),
      config: [],
    };
    this.onCellclick = this.onCellclick.bind(this);
  }

  onCellclick = (e) => {
    console.log(e.args.row.bounddata.product_count);
    if (e.args.datafield === "edit") {
      let oldvalue = e.args.row.bounddata.product_count;
      if (oldvalue <= 0) {
        alert("สินค้าหมด");
      } else {
        let newvalue = oldvalue - 1;
        this.myGrid.current.setcellvalue(
          e.args.row.bounddata.boundindex,
          "product_count",
          newvalue
        );
      }
    } else if (e.args.datafield === "pic") {
      alert("PIC");
    }
  };

  render() {
    return (
      <div>
        <center>
          <JqxGrid
            ref={this.myGrid}
            width="100%"
            height="700px"
            source={this.state.source}
            pageable={true}
            pagesize={20}
            autoheight={false}
            columns={this.state.columns}
            theme="material"
            editable={false}
            enabletooltips={false}
            selectionmode={"singlecell"}
            editmode={"click"}
            columnsresize={false}
            sortable={true}
            filterable={true}
            showfilterrow={true}
            onCellclick={this.onCellclick}
          />
        </center>
      </div>
    );
  }
}
