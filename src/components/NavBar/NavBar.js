/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
        <Container> 
          <img src='https://res.cloudinary.com/dmk1g4yf7/image/upload/v1694483557/ss_ajhpj8.jpg' className='nav-logo' alt='image'/>
          <h1 className='nav-heading'>Shopify</h1>
          <h1 className='nav-free1 d-block d-md-none'>Start free trail</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Solution" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Resources</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>  
            </Nav>
            <Nav className='nav-right'>
              <Nav.Link>Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <h1 className='nav-free d-md-block d-none'>Start free trail</h1>
      </Navbar>
    </div>
  )
}

export default NavBar