import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '@chakra-ui/react';
function NavBar(props) {

    var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <>
      <div style={divStyle}>
      <p style={aStyle} >RazorPay E-Commerce </p>

       <Link style={aStyle} to="/">
         <Button variant="success">Home</Button>
       </Link>

       <Link style={aStyle} to="/product">
       <Button variant="success">Product</Button>
       </Link>
       
       <Link style={aStyle} to="/orders">
         <Button variant="success">Order</Button>
       </Link>
     </div>
    </>
  )
}

export default NavBar
