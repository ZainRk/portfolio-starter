import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
import Skills from "./Components/Skills/Skills";
import Experiences from "./Components/Experiences/Experiences";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Experiences/>
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    </div>
  );
}

export default App;
