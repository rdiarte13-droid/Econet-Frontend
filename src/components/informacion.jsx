import { Card, Col, Container, Row } from 'react-bootstrap';

const features = [
  {
    title: 'Educación ambiental',
    text: 'Capacitamos comunidades y escuelas con talleres prácticos para construir hábitos sostenibles.',
  },
  {
    title: 'Reciclaje y reutilización',
    text: 'Creamos circuitos locales para reduce residuos, reutilizar recursos y cerrar ciclos de consumo.',
  },
  {
    title: 'Impacto colectivo',
    text: 'Conectamos proyectos vecinales para multiplicar acciones y hacer visible la transformación.',
  },
];

function Informacion() {
  return (
    <section id="informacion" className="info-section py-5">
      <Container>
        <div className="section-heading text-center mb-5">
          <p className="eyebrow">¿Cómo trabajamos?</p>
          <h2>Soluciones sostenibles para cada comunidad</h2>
        </div>

        <Row className="g-4">
          {features.map((feature) => (
            <Col md={4} key={feature.title}>
              <Card className="h-100 feature-card border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="feature-icon d-inline-flex align-items-center justify-content-center">●</div>
                  <Card.Title as="h3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Informacion;
