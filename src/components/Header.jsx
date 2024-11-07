import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar bg="white" data-bs-theme="light">
        <Container className='py-2'>
          <Navbar.Brand href="#home"><><i className="fa-solid fa-cart-shopping pe-2" bounce style={{color: "#000000",}} />e-<span className='text-warning'>K</span>art</></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <button className='btn btn-success ms-auto'>Login</button>
        </Container>
      </Navbar> 
    </>
  )
}

export default Header
