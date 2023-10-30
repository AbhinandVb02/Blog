import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomeNav() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to='/' className='linkstyle'>Login</Link></Nav.Link>
            <Nav.Link><Link to='/signup' className='linkstyle'>Sign Up</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HomeNav