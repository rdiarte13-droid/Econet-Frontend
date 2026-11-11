import { Container } from 'react-bootstrap';

function Foro({
  eyebrow = 'Foro EcoNet',
  title = 'Conversaciones de la comunidad',
  description = 'Compartí información sobre donaciones reciclables y alternativas para quienes no pueden acercarse a los puntos verdes.',
}) {
  return (
    <main className="py-5">
      <Container>
        <div className="section-heading text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="text-muted">{description}</p>
        </div>
      </Container>
    </main>
  );
}

export default Foro;