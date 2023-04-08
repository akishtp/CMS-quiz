import React from "react";
import "./NewTest.css";
import AddQuestion from "../../Components/AddQuestion/AddQuestion";

const NewTest: React.FC = () => {
  return (
    <div className="newTest">
      <label>
        Subject:
        <input type="text" />
      </label>
      <AddQuestion />
      <AddQuestion />
      <AddQuestion />
      <AddQuestion />
      <AddQuestion />
      <div className="end-buttons">
        <button className="more-questions">More Questions</button>
        <button className="create-test">Create Test</button>
      </div>
    </div>
  );
};

export default NewTest;
