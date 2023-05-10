import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  style={{ fontSize: '2rem', color:'#E6AF2E'}}>Burguer Quenn</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "1.2rem"}}>
              <Nav><Link to="/menu"  style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                }}>Menu</Link></Nav>
              <Nav><Link to="/orders"  style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                }}>Ordenes</Link></Nav>
              <Nav><Link to="/admin"  style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                }}>Administración</Link></Nav>
            </Nav>
            <Nav>
              <Nav><Link to="/"  style={{
                  textDecoration: 'none',
                  color: 'var(--bs-navbar-color)',
                }}>Logout</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header