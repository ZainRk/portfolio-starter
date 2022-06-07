import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/intro/Intro";
import Services from "./component/services/Services";
import Experience from "./component/experience/Experience";
import { useContext } from "react";
import { themeContext } from "./Context";

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
    </div>
  );
}

export default App;
