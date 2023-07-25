import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="landing">
        <a href="https://wa.me/">Ask your teacher for quiz link</a>&nbsp;🔗
      </div>
      <div className="for-teach">
        <div>Are you a teacher?</div>
        <Link to="/teacher">
          <button>Dashboard</button>
        </Link>
      </div>
      <div className="footer">
        <a href="https://github.com/akishtp/CMS-quiz">Opensource</a>❤️
      </div>
    </div>
  );
};

export default Home;
