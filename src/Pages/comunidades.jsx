import Comunidades from '../components/comunidades';

function ComunidadesPage() {
  return (
    <>
      <title>Comunidades ambientales | EcoNet</title>
      <meta
        name="description"
        content="Descubrí comunidades ambientales, conocé sus objetivos y sumate a iniciativas locales."
      />
      <Comunidades
        eyebrow="Red EcoNet"
        title="Comunidades que transforman su entorno"
        headingLevel="h1"
      />
    </>
  );
}

export default ComunidadesPage;