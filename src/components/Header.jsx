import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
   <Navbar expand="lg" bg='primary' variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-black">
  Digi Cartell
</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to='/'>
  <i className='fas fa-home'></i> Home
</Nav.Link>
            <Nav.Link as={Link} to="/product/:id">
  <i className='fas fa-store'></i> Products
</Nav.Link>

            <NavDropdown title="Category" id="basic-nav-dropdown">

              <LinkContainer to="/samsung">
  <NavDropdown.Item>Samsung</NavDropdown.Item>
</LinkContainer>
               <LinkContainer to="/sony">
  <NavDropdown.Item>Sony</NavDropdown.Item>
</LinkContainer>
               <LinkContainer to="/fujifilm">
  <NavDropdown.Item>Fujifilm</NavDropdown.Item>
</LinkContainer>
              <LinkContainer to="/canon">
  <NavDropdown.Item>Canon</NavDropdown.Item>
</LinkContainer>
              <LinkContainer to="/kodak">
  <NavDropdown.Item>Kodak</NavDropdown.Item>
</LinkContainer>

<LinkContainer to="/nikon">
  <NavDropdown.Item>Nikon</NavDropdown.Item>
</LinkContainer>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
