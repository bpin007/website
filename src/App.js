import './App.css';
import Navabar from './componet/Navabar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Footer from './componet/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navabar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Menu" element={<Menu />}/>
      </Routes>
      <Footer/>
    </Router>
   

    </div>
  );
}

export default App;
