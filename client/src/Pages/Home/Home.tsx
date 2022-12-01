import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header>Enter your Details</header>
      <form>
        <label>
          Register Number :
          <input type="text" placeholder="21BCS011" />
        </label>
        <label>
          Password : <input type="password" placeholder="dd/mm/yyyy" />
        </label>
        <label>
          Test Code : <input type="text" placeholder="Ask your Teacher" />
        </label>
        <button type="submit">Start Test</button>
      </form>
    </div>
  );
};

export default Home;
