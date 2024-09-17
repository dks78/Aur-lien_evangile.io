import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavBar } from "./components/NavBar";
import { Moi } from './components/Moi';
import { Temoignage } from './components/Temoignage';
import { Evangile } from './components/Evangile';
import { Contact } from './components/Contact';
import './App.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Moi />
        <Temoignage />
        <Evangile />
        <Contact />
    </div>
  );
}

export default App;
