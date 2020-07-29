import React from "react";
import { MDBDataTable, MDBBtn, MDBIcon, } from "mdbreact";
import "../Style/Orderstyle.css";
import Navbar from "../Components/Navbar";

const Ordercards = () => {
  const data = {
    columns: [
      {
        label: "Image",
        field: "img",
        sort: "asc",
        width: 50,
      },
      {
        label: "ID Product",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Product Name",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Category",
        field: "cate",
        sort: "asc",
        width: 200,
      },
      {
        label: "Stock count",
        field: "stock",
        sort: "asc",
        width: 100,
      },
      {
        label: "Product limit",
        field: "limit",
        sort: "asc",
        width: 150,
      },
      {
        label: "Price (THB)",
        field: "price",
        sort: "asc",
        width: 200,
      },
      {
        label: "Buy",
        field: "buy",
        sort: "asc",
        width: 50,
      },
    ],
    rows: [
      {
        img: (
          <div>
            <button className="pic-product"> 
              <a href="https://www.jib.co.th/web/product/readProduct/34443/1237/CPU--%E0%B8%8B%E0%B8%B5%E0%B8%9E%E0%B8%B5%E0%B8%A2%E0%B8%B9--AMD-AM4-RYZEN9-3900X-3-8-GHz">
                <MDBIcon icon="camera" size="lg" />
              </a>
            </button>
            <img
              className="hide"
              src="https://www.jib.co.th/img_master/product/original/20190709140702_34443_24_1.png"
            />
          </div>
        ),

        id: "3900",
        name: "RYZEN R3900X",
        cate: "CPU",
        stock: "61",
        price: "12,000",
        limit: "10",
        buy: (
          <button color="elegant" size="sm">
            <MDBIcon icon="shopping-cart" size="lg" />
          </button>
        ),
      },
    ],
  };

  return (
    <>
  <Navbar />
   <MDBDataTable 
   bordered 
   info={false}
   hover={true}
   entriesLabel="จำนวนข้อมูล (แถว)"
   searchLabel="ค้นหา"
   paginationLabel={["ก่อนหน้า", "ถัดไป"]}
   data={data} 
   striped
  

 
  
  />
   </>
  );
};

export default Ordercards;
