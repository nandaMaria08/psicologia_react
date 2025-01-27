import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SpecialistsPage from "./pages/SpecialistsPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/atendentes" element={<SpecialistsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
