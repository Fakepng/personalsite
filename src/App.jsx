import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Project from './Pages/Project';
import FourOFour from './Pages/FourOFour';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </>
  );
}

export default App;
