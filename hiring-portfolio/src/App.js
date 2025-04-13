import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
