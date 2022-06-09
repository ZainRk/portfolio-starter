import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/intro/Intro";
import Services from "./component/services/Services";
import Experience from "./component/experience/Experience";
import { useContext } from "react";
import { themeContext } from "./Context";
import Footer from "./component/footer/Footer";
import Work from "./component/work/Work";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonial from "./component/testimonial/Testimonial";
import Contact from "./component/contact/Contact";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme?.state?.darkMode;

  return (
    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
       
      <Navbar />
      <Intro />
      <Services />
      <Experience />
       <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
