import { Button, Col, Container, Row } from 'react-bootstrap';

function Inicio() {
  return (
    <section id="inicio" className="hero-section py-0">
      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={6} className="pe-lg-5">
            <p className="eyebrow">Red de acción ambiental</p>
            <h1>Conectados por un planeta más limpio.</h1>
            <p className="lead text-muted">
              EcoNet une a comunidades, organizaciones y personas que quieren impulsar
              soluciones sostenibles y crear impacto real en cada barrio.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button href="#informacion" variant="success" size="lg">
                Descubrir más
              </Button>
              <Button href="#contacto" variant="outline-success" size="lg">
                Unirse a la red
              </Button>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <div className="hero-card shadow-lg">
              <div className="hero-badge d-inline-block">+12.000</div>
              <h3>Acciones sostenibles activas</h3>
              <p>
                Recolección, educación ambiental, huertos urbanos y voluntariado,
                todos conectados para generar cambio colectivo.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Inicio;
