import { Container } from 'react-bootstrap';

function Foro({
  eyebrow = 'Foro EcoNet',
  title = 'Conversaciones de la comunidad',
  description = 'Compartí información sobre donaciones reciclables y alternativas para quienes no pueden acercarse a los puntos verdes.',
}) {
  return (
    <main className="py-5">
      <Container>
        <div className="text-center">
          <p className="text-success text-uppercase fw-bold small">{eyebrow}</p>
          <h1 className="display-6 fw-bold">{title}</h1>
          <p className="text-muted">{description}</p>
        </div>
      </Container>
    </main>
  );
}

export default Foro;