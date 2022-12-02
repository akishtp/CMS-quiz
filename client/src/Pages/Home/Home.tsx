import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const [tcode, setTcode] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/test/${tcode}`);
  };
  return (
    <div className="home">
      <div className="home-container">
        <header>Enter your Details</header>
        <form onSubmit={() => submitHandler()}>
          <label>
            Register Number :
            <input type="text" placeholder="eg : 21BCS011" />
          </label>
          {/* <label>
            Password : <input type="password" placeholder="dd/mm/yyyy" />
          </label> */}
          <label>
            Test Code :
            <input
              type="text"
              placeholder="Ask your Teacher"
              value={tcode}
              onChange={(e) => setTcode(e.target.value)}
              required
            />
          </label>
          <button type="submit">Start Test</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
