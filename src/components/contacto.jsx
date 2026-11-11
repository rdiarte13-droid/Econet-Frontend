import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Contacto() {
  return (
    <section id="contacto" className="contact-section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="section-heading mb-4">
              <p className="eyebrow">Contacto</p>
              <h2>Sumate a la red EcoNet</h2>
            </div>
            <p className="text-muted">
              Si querés colaborar, organizar una acción o formar parte de una comunidad,
              contanos tu idea y te respondemos enseguida.
            </p>
          </Col>

          <Col lg={6}>
            <Form className="contact-form shadow-sm">
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="tu@email.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Contanos qué quisieras hacer..." />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;
