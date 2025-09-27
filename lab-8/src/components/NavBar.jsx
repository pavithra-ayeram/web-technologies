import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className="navbar-custom">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="title">Pav's Blogs</Navbar.Brand>
        <Nav className="ms-auto d-flex gap-3">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/posts" className="nav-link">Posts</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
