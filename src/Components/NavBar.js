import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/nav.css'



function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" text="dark" variant="light" >
      <Container >
        <Navbar.Brand href="/" className='fw-bold fs-3'>Postit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="justify-content-end flex-grow-1 pe-3 text-dark fw-bold">
            <Nav.Link href="/create">Stories</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/:id">Sign in</Nav.Link>
           <Nav.Link href="/signup"> <button className="btn btn-primary">Get Started</button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;