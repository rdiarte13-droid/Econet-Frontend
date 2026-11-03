import { Carousel, Col, Container, Row } from 'react-bootstrap';

const slides = [
  {
    title: 'Parques urbanos más verdes',
    text: 'Potenciamos espacios públicos con árboles, jardines y zonas de descanso para la comunidad.',
  },
  {
    title: 'Mobiliario circular',
    text: 'Reciclamos materiales para crear elementos funcionales y de bajo impacto para barrios enteros.',
  },
  {
    title: 'Voluntariado ambiental',
    text: 'Organizamos jornadas de limpieza, plantación y concientización con participación activa.',
  },
];

function Carrousel() {
  return (
    <section id="lugares" className="carousel-section">
      <Container>
        <div className="section-heading text-center mb-4">
          <p className="eyebrow">Lugares de impacto</p>
          <h2>Proyectos en movimiento</h2>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel fade className="eco-carousel">
              {slides.map((slide) => (
                <Carousel.Item key={slide.title}>
                  <div className="carousel-panel">
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Carrousel;
