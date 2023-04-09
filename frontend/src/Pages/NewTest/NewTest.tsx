import React, { useState } from "react";
import "./NewTest.css";
import AddQuestion from "../../Components/AddQuestion/AddQuestion";

const NewTest: React.FC = () => {
  const [noOfQs, setNoOfQs] = useState<number>(1);

  return (
    <div className="newTest">
      <label>
        Subject:
        <input type="text" />
      </label>
      {Array.from(Array(noOfQs), (e, i) => {
        return <AddQuestion key={i} index={i} />;
      })}
      <div className="end-buttons">
        <button
          className="more-questions"
          onClick={() => setNoOfQs(noOfQs + 1)}
        >
          More Questions
        </button>
        <button className="create-test">Create Test</button>
      </div>
    </div>
  );
};

export default NewTest;
