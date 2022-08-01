import "./App.css";
import About from "./Pages/About/About";
// import Contact from "./components/Contact";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import React from "react";
import OneCocktail from "./Pages/OneCocktail/OneCocktail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cocktail" element={<OneCocktail />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
