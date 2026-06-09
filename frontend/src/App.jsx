import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

/**
 * Componente Controlador de la Aplicación
 * Configura las rutas globales.
 */
function App() {
  return (
    <Router>
      {/* Fondo crema global y texto oscuro por defecto para consistencia visual */}
      <div className="min-h-screen bg-vintage-crema text-vintage-grisOscuro font-sans antialiased selection:bg-vintage-verde/20 selection:text-vintage-verde">
        
        {/* Navbar con fondo oscuro */}
        <Navbar />
        
        {/* Contenedor semántico principal de las vistas dinámicas */}
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
