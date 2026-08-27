import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Galary from "./Galary";
import Heade from "./Heade";
import Fruits1 from "./Fruits1";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Heade/>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galary" element={<Galary />} />
      </Routes>
      <Fruits1/>
    </BrowserRouter>
  );
}

export default App;