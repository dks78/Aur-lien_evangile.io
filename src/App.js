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
import {Activite } from './components/Activite';

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
        <NavBar/>
        <Routes>
          <Route path="/Hom" element={<HomePage/>} />
          <Route path="/evangile" element={<Evangile/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Activite" element={<Activite/>}/>
        </Routes>
      </div>

      <Footer/>
    </Router>
    
  );
}

export default App;
