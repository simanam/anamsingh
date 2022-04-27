import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Homepage, CaseStudy } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes basename="/">
        <Route path="/frontend_react" element={<Homepage />} />
        <Route path="/frontend_react/uokCaseStudy" element={<CaseStudy />} />
      </Routes>
    </div>
  );
};

export default App;
