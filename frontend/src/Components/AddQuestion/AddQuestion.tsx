import React from "react";
import "./AddQuestion.css";

interface addQuestionState {
  index: number;
}

const AddQuestion: React.FC<addQuestionState> = ({ index }) => {
  return (
    <div className="add-question">
      <label>
        Question {index + 1}:<textarea rows={5}></textarea>
      </label>
      <div className="add-options">
        <label>
          <input type="radio" name={`question${index}`} />
          <div className="option-span">Option 1:</div>
          <input type="text" />
        </label>
        <label>
          <input type="radio" name={`question${index}`} />
          <div className="option-span">Option 2:</div>
          <input type="text" />
        </label>
        <label>
          <input type="radio" name={`question${index}`} />
          <div className="option-span">Option 3:</div>
          <input type="text" />
        </label>
        <label>
          <input type="radio" name={`question${index}`} />
          <div className="option-span">Option 4:</div>
          <input type="text" />
        </label>
      </div>
    </div>
  );
};

export default AddQuestion;
