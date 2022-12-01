import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
