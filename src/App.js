import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Perks } from "./components/Perks/Perks";
import { People } from "./components/People/People";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Perks />
      <Experience />
      <People />
    </div>
  );
}

export default App;
