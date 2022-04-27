import React from "react";

import { Homepage } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Homepage />
    </div>
  );
};

export default App;
