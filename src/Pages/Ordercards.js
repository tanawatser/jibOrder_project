import React, { Component } from "react";
import {

  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,

} from "mdbreact";
import "../Style/Orderstyle.css";

class Ordercards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [
        { id: 1, name: "Notebook", brand: "asus" },
        { id: 2, name: "Computer Set", brand: "asus" },
        { id: 3, name: "Hardware", brand: "asus" },
        { id: 4, name: "Monitor", brand: "asus" },
        { id: 5, name: "Gaming Gear", brand: "asus" },
        { id: 6, name: "Storage", brand: "asus" },
        { id: 7, name: "Memory", brand: "asus" },
        { id: 8, name: "Network", brand: "asus" },
        { id: 9, name: "Printer", brand: "asus" },
        { id: 10, name: "Speaker", brand: "asus" },
        { id: 11, name:"Software", brand: "asus" },

      ],
      data: [],
    };
    this.setState = {};
  }

  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    let { product } = this.state;

    return (
// Categories
<MDBCol md='12' className='mt-4'>
  
<h2>Categories</h2>

<hr className='my-5' />
<center>
        <MDBCard >
        <MDBRow id='categories'>
        {
                      product.map(i=>(
                  <MDBCol md='2' key={i.id}>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>

                          <MDBCardImage
                          cascade
                          className='img-fluid photo'
                          src={require('../img/product/'+i.name+'.jpg')}
                          waves
                          />
                          <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <strong>{i.name}</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            รายละเอียด : {i.brand}
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            เลือก
                          </MDBNavLink>
                          </MDBCardBody>
                          </MDBCard>
                    </MDBAnimation>

            </MDBCol>
              ))
            }
        </MDBRow>
        </MDBCard>
        </center>
        </MDBCol>
   
    
    );
  }
}

export default Ordercards;
