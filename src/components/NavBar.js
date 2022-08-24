import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <>
      <Navbar className='NavBar fixed-top' expand="lg">
        <Container>
          {/* Name */}
          <Navbar.Brand className='text-main fs-3 fw-bold' href="#home">Mayar Mosaad</Navbar.Brand>
          {/* toggler */}
          <Navbar.Toggle className='toggler'/>
          {/* List */}
          <Navbar.Collapse>
            <Nav className="ms-auto fs-5" defaultActiveKey='#home'>
              <Nav.Link className='nav-link ms-2 rounded-pill' href="#home">Home</Nav.Link>
              <Nav.Link className='nav-link ms-2 rounded-pill' href="#services">Services</Nav.Link>
              <Nav.Link className='nav-link ms-2 rounded-pill' href="#clients">Clients</Nav.Link>
              <Nav.Link className='nav-link ms-2 rounded-pill' href="#projects">Projects</Nav.Link>
              <Nav.Link className='nav-link ms-2 rounded-pill' href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;