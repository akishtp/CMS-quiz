import React from "react";
import { useParams } from "react-router-dom";
import SingleQuestion from "../../components/SingleQuestion/SingleQuestion";
import "./Test.css";

const Test: React.FC = () => {
  let { id } = useParams();

  return (
    <div className="test">
      <header>
        <div className="test-subject">test.subject</div>
        <div className="test-type">test.type{id}</div>
      </header>
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
    </div>
  );
};

export default Test;
