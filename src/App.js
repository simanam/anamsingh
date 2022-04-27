import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Homepage, CaseStudy } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/uokCaseStudy" element={<CaseStudy />} />
      </Routes>
    </div>
  );
};

export default App;
