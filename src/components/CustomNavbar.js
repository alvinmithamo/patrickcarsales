import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#'>PATRICKCARSALES</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/listing'>Car Listing</Nav.Link>
                <Nav.Link href='#'>Car Makes</Nav.Link>
                <Nav.Link href='/trade-in'>Trade In</Nav.Link>
                <Nav.Link href='/contact-us'>Contact Us</Nav.Link>
            </Nav>

            <Button variant='outline-dark'>Register / Login</Button>
            <Button variant='dark' className='ml-2'>Contact Us</Button>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;