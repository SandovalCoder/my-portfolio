import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
