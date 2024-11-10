// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Moi } from './components/Moi';
import { Temoignage } from './components/Temoignage';
import { Evangile } from './components/Evangile';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <Moi />
      <Temoignage />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />  {/* Navbar sera visible sur toutes les pages */}
        <Routes>
          <Route path="/Hom" element={<HomePage />} />
          <Route path="/evangile" element={<Evangile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nouvelle-page" element={<h1>Nouvelle Page</h1>} />
        </Routes>
      </div>

      <Footer />
    </Router>
    
  );
}

export default App;
