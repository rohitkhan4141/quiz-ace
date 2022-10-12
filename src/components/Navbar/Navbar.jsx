import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Text.css";

const NavbarComp = () => {
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container>
        <Navbar.Brand className='ps-3 fs-3 text-primary' href='#'>
          Quiz-Ace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='ms-auto my-2 my-lg-0 pt-3'
            style={{ height: "60px" }}
            navbarScroll
          >
            <Link className='text-decoration-none px-4' to='/'>
              Home
            </Link>
            <Link className='text-decoration-none px-4' to='/statistics'>
              Statistics
            </Link>
            <Link className='text-decoration-none px-4' to='/blog'>
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
