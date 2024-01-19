// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; 
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Acceso';
import Contacto from './pages/Contacto';

function App() {

  return (
    <Router>
      <Header />
      
        <Routes>
        <Route path="/access" element={<Access />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
