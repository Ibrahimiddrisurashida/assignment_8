import React from "react";
import { Container, Nav, NavbarBrand, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-warning navbar-expand">
      <Container>
        <NavbarBrand>SHEA-APP</NavbarBrand>
        <Nav>
          <Nav.Item>
            <Link to="/trainees" className="nav-link">
              SHEA-PRODUCTS
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/addtrainee" className="nav-link">
              ADD
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/login" className="nav-link">
              SIG IN
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/register" className="nav-link">
              SIGN UP
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
