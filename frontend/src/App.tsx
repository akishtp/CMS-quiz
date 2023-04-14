import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Test from "./Pages/Test/Test";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NewTest from "./Pages/NewTest/NewTest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/new" element={<NewTest />} />
      </Routes>
    </div>
  );
}

export default App;
