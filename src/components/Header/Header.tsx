import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../../assets/logo-img/mike-logo_487x105_no-bg.svg';

import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="border-bottom p-4">
      <Container>
        <Navbar.Brand
          href="#home"
          className="border rounded-4 border-primary px-1"
        >
          <img
            src={logo}
            alt="Mike Logo"
            className="mike-logo"
            height={40}
            width={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
