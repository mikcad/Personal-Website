import { Outlet } from 'react-router';
import { NavLink, Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '/logo-img/mike-logo_487x105_no-bg.svg';

import './navbar.css';

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="p-4 mb-5 justify-content-center sticky-top"
      >
        <Container>
          <Navbar.Brand href="#home" className="px-3">
            <Nav.Link href="#home">
              <Link to={'/'}>
                <img
                  src={logo}
                  alt="Mike Logo"
                  className="mike-logo"
                  height={40}
                  width={100}
                />
              </Link>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto column-gap-2 text-center">
              <Nav.Link href="#home">
                <NavLink to={'/'} className={'nav-link-underline nav-link'}>
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#about">
                <NavLink
                  to={'/about'}
                  className={'nav-link-underline nav-link'}
                >
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#projects">
                <NavLink
                  to={'/projects'}
                  className={'nav-link-underline nav-link'}
                >
                  Projects
                </NavLink>
              </Nav.Link>
              {/* TODO add a button/border for the contact link */}
              <Nav.Link href="#contact">
                <NavLink
                  to={'/contact'}
                  className={'nav-link-underline nav-link'}
                >
                  Get in Touch!
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
