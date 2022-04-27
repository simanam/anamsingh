import React from "react";
import { Routes, Route } from "react-router-dom";

import { Homepage, CaseStudy } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes basename="/">
        <Route path="/anamsingh" element={<Homepage />} />
        <Route path="/anamsingh/uokCaseStudy" element={<CaseStudy />} />
      </Routes>
    </div>
  );
};

export default App;
