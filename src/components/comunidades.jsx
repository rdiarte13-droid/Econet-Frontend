import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const initialCommunities = [
  { id: 1, name: 'Barrio Verde', members: '1.200 vecinos', focus: 'Huertos urbanos' },
  { id: 2, name: 'EcoEscuelas', members: '440 estudiantes', focus: 'Educación ambiental' },
  { id: 3, name: 'Recicla Juntos', members: '860 activistas', focus: 'Recolección y reutilización' },
];

function Comunidades({
  eyebrow = 'Comunidades',
  title = 'Personas y barrios en acción',
  headingLevel = 'h2',
}) {
  const Heading = headingLevel;
  const [communities, setCommunities] = useState(initialCommunities);
  const [formData, setFormData] = useState({
    name: '',
    members: '',
    focus: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCommunity = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const focus = formData.focus.trim();
    const members = formData.members.trim() || 'Nueva comunidad';

    if (!name || !focus) {
      return;
    }

    setCommunities((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        members,
        focus,
      },
    ]);

    setFormData({ name: '', members: '', focus: '' });
  };

  const handleRemoveCommunity = (id) => {
    setCommunities((prev) => prev.filter((community) => community.id !== id));
  };

  return (
    <section id="comunidades" className="communities-section py-5">
      <Container>
        <div className="section-heading text-center mb-5">
          <p className="eyebrow">{eyebrow}</p>
          <Heading>{title}</Heading>
        </div>

        <Form onSubmit={handleAddCommunity} className="community-form mb-5">
          <Row className="g-3 align-items-end">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Huertos del Sur"
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Integrantes</Form.Label>
                <Form.Control
                  type="text"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  placeholder="Ej: 350 vecinos"
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group>
                <Form.Label>Focus</Form.Label>
                <Form.Control
                  type="text"
                  name="focus"
                  value={formData.focus}
                  onChange={handleChange}
                  placeholder="Ej: Huertos urbanos"
                />
              </Form.Group>
            </Col>

            <Col md={2}>
              <Button type="submit" variant="success" className="w-100">
                Agregar
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="g-4">
          {communities.map((community) => (
            <Col md={4} key={community.id}>
              <Card className="community-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                    <div className="community-badge d-inline-block">EcoNet</div>
                    <Button
                      variant="link"
                      className="community-delete"
                      onClick={() => handleRemoveCommunity(community.id)}
                    >
                      Eliminar
                    </Button>
                  </div>
                  <Card.Title as="h3">{community.name}</Card.Title>
                  <Card.Text className="text-muted">{community.members}</Card.Text>
                  <span className="community-focus d-inline-block mt-3">{community.focus}</span>
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
