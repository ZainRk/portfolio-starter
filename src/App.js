import Navbar from "./component/navbar/Navbar";
import './App.css'
import Intro from "./component/intro/Intro";
import Services from "./component/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
