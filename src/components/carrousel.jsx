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
    <section id="lugares" className="bg-body-tertiary py-5">
      <Container>
        <div className="text-center mb-4">
          <p className="text-success text-uppercase fw-bold small">Lugares de impacto</p>
          <h2 className="display-6 fw-bold">Proyectos en movimiento</h2>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <Carousel fade>
              {slides.map((slide) => (
                <Carousel.Item key={slide.title}>
                  <div className="bg-success text-white rounded-4 overflow-hidden shadow">
                    <div className="row g-0">
                      <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start p-4 p-md-5">
                        <h3 className="h2">{slide.title}</h3>
                        <p className="mb-0">{slide.text}</p>
                      </div>

                      <div className="col-md-6 ratio ratio-4x3">
                        <img className="w-100 h-100 object-fit-cover" src={slide.image} alt={slide.title} />
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
