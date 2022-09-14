import React from 'react';
import '../styles/Nav.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export default function NavHead() {
  return (
    <Navbar bg='white' className="NavHead">
      <Container>
       <Nav.Link href='/home'>Home</Nav.Link>
       <Nav.Link href='/performers'>Performers</Nav.Link>
       <Nav.Link href='/top'>Hot 100</Nav.Link>
       <NavDropdown title="Account" id="basic-nav-dropdown">
       <NavDropdown.Item href='/user'>Profile</NavDropdown.Item>
       <NavDropdown.Item href='/favorites'>Favorites</NavDropdown.Item>
        <NavDropdown.Item href='/settings'>Settings</NavDropdown.Item>
       </NavDropdown>
      </Container>
    </Navbar>
  )
}
