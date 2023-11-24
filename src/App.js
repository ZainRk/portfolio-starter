import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import "./App.css";
import Services from "./components/Services";
import Work from "./components/Work";
import Form from "./components/Form";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonaial from "./components/Testimonaial";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonaial />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
