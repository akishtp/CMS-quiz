import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Test/Test";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<span>$404 Error</span>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
