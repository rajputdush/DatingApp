import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Login from './components/Login'
import './App.css';
import SafetyTab from './components/safety';
import PricingTab from './components/Pricing';
import NotFound from "./components/NotFound";

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/safety" element={<SafetyTab />} />
        <Route path="/pricing" element={<PricingTab />} />
        <Route path="/login" element={<Login />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Router>
  );
}

export default App