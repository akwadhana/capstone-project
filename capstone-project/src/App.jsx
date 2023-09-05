import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PropertiesDetails from "./pages/PropertiesDetails";
import Navbar from "./components/Navbar";
import Property from "./pages/Property";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/property/:id" element={<PropertiesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
