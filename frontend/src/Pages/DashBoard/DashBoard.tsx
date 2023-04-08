import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Link to="/new" className="new-test">
        +<span>New Test</span>
      </Link>
    </div>
  );
};

export default Dashboard;
