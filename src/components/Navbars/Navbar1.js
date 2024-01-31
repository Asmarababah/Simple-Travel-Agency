import React from 'react'
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import '../Navbars/NavStyle.css';
import logo from '../../Assets/logo.png';
import logo2 from '../../Assets/honeymoon.png'
import phone from '../../Assets/telephone.png'
import { Link } from 'react-router-dom';



const Navbar1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='nav'>
      <Container id='container'>
        <Navbar.Brand>
          <img src={logo} alt='A' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/" className="nav-link" > Home</Link>
            <Link to="/about" className="nav-link">About</Link>

            <NavDropdown title="Our distination" id="basic-nav-dropdown">
              <Link to="/turkey" className='dropdown-item'> Turkey</Link>
              <Link to="/eygpt" className='dropdown-item'> Eygpt</Link>
              <Link to="/eimairates" className='dropdown-item'> Emairates</Link>
            </NavDropdown>

            <Link to="/comment" className="nav-link"> Comments </Link>
            <Link to="/contact" className="nav-link">Contact us</Link>
            <Link to="/contact" className="nav-link"><img src={phone} className='phone' /></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbar1
