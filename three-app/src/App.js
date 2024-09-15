import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
