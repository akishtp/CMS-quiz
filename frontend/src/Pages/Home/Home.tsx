import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <form>
        <label>
          Register Number:
          <input type="text" />
        </label>
        <label>
          DOB:
          <input type="date" />
        </label>
        <label>
          Exam Code:
          <input type="text" placeholder="ask your teacher for the code.." />
        </label>
        <button type="submit">
          <Link to="/test">Start Test</Link>
        </button>
      </form>
    </div>
  );
};

export default Home;
