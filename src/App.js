import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
