import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Certificate from "./pages/Certificate";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="membership" element={<Membership />} />
        <Route path="/certifications" element={<Certificate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;