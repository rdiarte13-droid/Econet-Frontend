import { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const initialCommunities = [
  { id: 1, name: 'Barrio Verde', activity: 'Huertos urbanos', description: '', contact: '' },
  { id: 2, name: 'EcoEscuelas', activity: 'Educación ambiental', description: '', contact: '' },
  { id: 3, name: 'Recicla Juntos', activity: 'Recolección y reutilización', description: '', contact: '' },
];

const emptyForm = {
  name: '',
  activity: '',
  description: '',
  contact: '',
};

function Comunidades({
  eyebrow = 'Comunidades',
  title = 'Personas y barrios en acción',
  headingLevel = 'h2',
}) {
  const Heading = headingLevel;
  const [communities, setCommunities] = useState(initialCommunities);
  const [formData, setFormData] = useState(emptyForm);
  const [formError, setFormError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError('');
  };

  const handleAddCommunity = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const activity = formData.activity.trim();
    const contact = formData.contact.trim();
    const description = formData.description.trim();

    if (!name || !activity || !contact) {
      setFormError('Completá nombre, actividad y contacto para agregar la comunidad.');
      return;
    }

    setCommunities((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        activity,
        description,
        contact,
      },
    ]);

    setFormData(emptyForm);
    setFormError('');
  };

  const handleRemoveCommunity = (id) => {
    setCommunities((prev) => prev.filter((community) => community.id !== id));
  };

  return (
    <section id="comunidades" className="communities-section py-5">
      <Container>
        <div className="text-center mb-5">
          <p className="text-success text-uppercase fw-bold small">{eyebrow}</p>
          <Heading className="display-6 fw-bold">{title}</Heading>
        </div>

        <Form onSubmit={handleAddCommunity} className="bg-body-tertiary border rounded-4 p-4 mb-5">
          <h3 className="h4 fw-bold mb-4">Sumá una comunidad</h3>
          {formError && <Alert variant="danger">{formError}</Alert>}
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nombre <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej.: Huertos del Sur"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Actividad <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  placeholder="Ej.: Huerta comunitaria"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Descripción <span className="text-secondary">(opcional)</span></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Contá un poco más sobre la comunidad"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Contacto <span className="text-danger">*</span></Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Email o teléfono"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-4">
            <Button type="submit" variant="success" className="px-4">
              Agregar comunidad
            </Button>
          </div>
        </Form>

        <Row className="g-4">
          {communities.map((community) => (
            <Col md={4} key={community.id}>
              <Card className="h-100 rounded-4 overflow-hidden border-0 shadow-sm">
                <Card.Header className="d-flex align-items-center justify-content-between bg-success text-white border-0 px-4 py-3">
                  <span className="fw-semibold">Comunidad EcoNet</span>
                  <Button
                    variant="link"
                    className="text-white text-decoration-none p-0"
                    aria-label={`Eliminar comunidad ${community.name}`}
                    onClick={() => handleRemoveCommunity(community.id)}
                  >
                    Eliminar
                  </Button>
                </Card.Header>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title as="h3" className="h4 fw-bold mb-3">
                    {community.name}
                  </Card.Title>
                  <p className="small text-uppercase text-secondary fw-semibold mb-1">Actividad</p>
                  <p className="text-success fw-semibold mb-3">{community.activity}</p>
                  {community.description && (
                    <Card.Text className="text-body-secondary">
                      {community.description}
                    </Card.Text>
                  )}
                  <div className="mt-auto border-top pt-3">
                    <p className="small text-uppercase text-secondary fw-semibold mb-1">Contacto</p>
                    <p className="mb-0 text-break">{community.contact || 'No informado'}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Comunidades;
