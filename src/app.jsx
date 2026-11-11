import Navbar from './components/navbar';
import Inicio from './components/inicio';
import PuntosVerdes from './components/puntos-verdes';
import Informacion from './components/informacion';
import Carrousel from './components/carrousel';
import Comunidades from './components/comunidades';
import Contacto from './components/contacto';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Inicio />
        <PuntosVerdes />
        <Informacion />
        <Carrousel />
        <Comunidades />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;