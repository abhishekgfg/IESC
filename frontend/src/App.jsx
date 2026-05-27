import React from "react";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
<Footer  />
    </BrowserRouter>
  );
}

export default App;