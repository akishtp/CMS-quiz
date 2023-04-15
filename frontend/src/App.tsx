import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Test from "./Pages/Test/Test";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NewTest from "./Pages/NewTest/NewTest";
import Submit from "./Pages/Submit/Submit";
import TestDetails from "./Pages/TestDetails/TestDetails";
import Signup from "./Pages/Admin/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/admin/signup" element={<Signup />} />
        <Route path="/teacher/:id" element={<TestDetails />} />
        <Route path="/new" element={<NewTest />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
