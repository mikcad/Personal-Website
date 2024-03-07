import { Outlet } from 'react-router';
import { NavLink, Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '/logo-img/mike-logo_487x105_no-bg.svg';

import './header.css';

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="p-4 mb-5 border-bottom justify-content-center"
      >
        <Container className="m-0">
          <Navbar.Brand className="px-3">
            <Link to={'/'}>
              <img
                src={logo}
                alt="Mike Logo"
                className="mike-logo"
                height={40}
                width={100}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto column-gap-2 text-center">
              <NavLink to={'/'} className={'nav-link'}>
                Home
              </NavLink>
              <NavLink to={'/about'} className={'nav-link'}>
                About
              </NavLink>
              <NavLink to={'/projects'} className={'nav-link'}>
                Projects
              </NavLink>
              <NavLink to={'/contact'} className={'nav-link'}>
                Cotact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
