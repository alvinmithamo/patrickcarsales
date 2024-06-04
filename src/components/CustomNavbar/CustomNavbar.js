import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CustomNavbar/CustomNavbar.css'

const CustomNavbar = () => {
  return (
   

    <Navbar bg='light' expand='lg'>
        <Navbar.Brand as={Link} to='/'>PATRICK CAR SALES</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/listing'>Car Listing</Nav.Link>
                {/* <Nav.Link href='#'>Car Makes</Nav.Link> */}
                {/* <Nav.Link href='/trade-in'>Trade In</Nav.Link> */}
                <Nav.Link as={Link} to='/contact-us'>Contact Us</Nav.Link>
            </Nav>
            <div className='navbar-buttons'>
            {/* <Button variant='outline-dark' className='p-8'>Login</Button>
            <Button variant='dark' className='ml-2'>Contact Us</Button> */}
            </div>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;