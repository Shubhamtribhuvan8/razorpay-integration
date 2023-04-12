import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react';

function NavBar(props) {

  const divStyle = {
    padding: "20px",
    backgroundColor: "black",
    position: "fixed",
    zIndex: 1,
    textAlign: "right",
  };

  const aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };

  const mq = [
    // medium screens
    "@media screen and (max-width: 992px) {",
    "  .navbar {",
    "    display: flex;",
    "    flex-direction: column;",
    "    align-items: flex-end;",
    "  }",
    "  .navbar-link {",
    "    margin-top: 10px;",
    "    margin-right: 0;",
    "  }",
    "}",
    // small screens
    "@media screen and (max-width: 576px) {",
    "  .navbar {",
    "    padding: 10px;",
    "  }",
    "  .navbar-link {",
    "    margin-top: 10px;",
    "    margin-right: 0;",
    "  }",
    "}",
  ].join("");

  return (
    <>
      <style>{mq}</style>
      <div style={divStyle} className="navbar">
        <p style={aStyle} >RazorPay E-Commerce </p>

        <Link style={aStyle} to="/" className="navbar-link">
          <Button variant="success">Home</Button>
        </Link>

        <Link style={aStyle} to="/product" className="navbar-link">
          <Button variant="success">Product</Button>
        </Link>

        <Link style={aStyle} to="/orders" className="navbar-link">
          <Button variant="success">Order</Button>
        </Link>
      </div>
    </>
  )
}

export default NavBar
