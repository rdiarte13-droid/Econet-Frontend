import { Carousel, Col, Container, Row } from 'react-bootstrap';

const slides = [
  {
    title: 'Parques urbanos más verdes',
    text: 'Potenciamos espacios públicos con árboles, jardines y zonas de descanso para la comunidad.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Mobiliario circular',
    text: 'Reciclamos materiales para crear elementos funcionales y de bajo impacto para barrios enteros.',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Voluntariado ambiental',
    text: 'Organizamos jornadas de limpieza, plantación y concientización con participación activa.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
  },
];

function Carrousel() {
  return (
    <section id="lugares" className="carousel-section py-5">
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
                    <div className="carousel-content d-flex flex-column flex-md-row">
                      <div className="carousel-copy d-flex flex-column justify-content-center text-center text-md-start p-4 p-md-5">
                        <h3>{slide.title}</h3>
                        <p>{slide.text}</p>
                      </div>

                      <div className="carousel-image-wrap">
                        <img src={slide.image} alt={slide.title} />
                      </div>
                    </div>
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
