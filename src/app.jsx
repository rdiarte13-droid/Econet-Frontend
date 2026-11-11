import Navbar from './components/navbar';
import Inicio from './components/inicio';
import Informacion from './components/informacion';
import Carrousel from './components/carrousel';
import Comunidades from './components/comunidades';
import Contacto from './components/contacto';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import ComunidadesPage from './Pages/comunidades';
import ForoPage from './Pages/foro';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Inicio />
              <Informacion />
              <Carrousel />
              <Comunidades />
              <Contacto />
            </main>
          }
        />
        <Route path="/comunidades" element={<ComunidadesPage />} />
        <Route path="/foro" element={<ForoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;