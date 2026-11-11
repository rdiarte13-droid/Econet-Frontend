import Foro from '../components/foro';

function ForoPage() {
  const forumContent = {
    eyebrow: 'Foro EcoNet',
    title: 'Conversaciones de la comunidad',
    description:
      'Compartí información sobre donaciones reciclables y alternativas para quienes no pueden acercarse a los puntos verdes.',
  };

  return (
    <>
      <title>Foro ambiental | EcoNet</title>
      <meta name="description" content={forumContent.description} />
      <Foro
        eyebrow={forumContent.eyebrow}
        title={forumContent.title}
        description={forumContent.description}
      />
    </>
  );
}

export default ForoPage;