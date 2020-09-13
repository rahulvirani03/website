import React from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import './btn.css';


export default function List() {
    return (
        <div >
           <MDBContainer className="alert4" >
  <MDBListGroup style={{ width: "22rem" }}>
    <MDBListGroupItem href="/DeleteShirt" active>Shirt</MDBListGroupItem>
    <MDBListGroupItem href="/DeleteTshirt">Tshirt</MDBListGroupItem>
    <MDBListGroupItem href="#">Trousers</MDBListGroupItem>
    <MDBListGroupItem href="/DeleteSparkle">Sparkle</MDBListGroupItem>

  </MDBListGroup>
</MDBContainer>
 
        </div>
    )
}
