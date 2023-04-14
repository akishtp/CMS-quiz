import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const [regno, setRegno] = useState<string>("");
  const [dob, setDob] = useState<string>();
  const [examCode, setExamCode] = useState<string>("");
  return (
    <div className="home">
      <form>
        <label>
          Register Number:
          <input
            type="text"
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
          />
        </label>
        <label>
          DOB:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            min="1997-01-01"
            max="2007-12-31"
          />
        </label>
        <label>
          Exam Code:
          <input
            type="text"
            placeholder="ask your teacher for the code.."
            value={examCode}
            onChange={(e) => setExamCode(e.target.value)}
          />
        </label>
        <Link to={`/test/${examCode}`}>
          <button type="submit">Start Test</button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
