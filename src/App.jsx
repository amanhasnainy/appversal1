import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AI from './pages/AI';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import CaseStudy from './pages/CaseStudy';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
