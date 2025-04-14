import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Perks } from "./components/Perks/Perks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Perks />
      <Experience />
    </div>
  );
}

export default App;
