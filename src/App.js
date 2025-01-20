// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Moi } from './components/Moi';
import { Temoignage } from './components/Temoignage';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';
import { Activite } from './components/Activite';

function HomePage() {
  return (
    <>
      <Moi />
      <Temoignage />
      <Activite />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/hom" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
