import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="fw-bold text-success">
          EcoNet
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="menu" />

        <BootstrapNavbar.Collapse id="menu">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#informacion">Información</Nav.Link>
            <Nav.Link href="#lugares">Lugares</Nav.Link>
            <Nav.Link as={Link} to="/comunidades">Comunidades</Nav.Link>
            <Nav.Link as={Link} to="/foro">Foro</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;