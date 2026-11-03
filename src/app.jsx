import Navbar from './components/navbar';
import Inicio from './components/inicio';
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