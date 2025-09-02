import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Timer from "./pages/Timer";
import Thermostat from "./pages/Thermostat";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/thermostat" element={<Thermostat />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;