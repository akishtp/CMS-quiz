import React from "react";
import "./AddQuestion.css";

const AddQuestion: React.FC = () => {
  return (
    <form className="add-question">
      <label>
        Question:
        <textarea rows={5}></textarea>
      </label>
      <div className="add-options">
        <label>
          <input type="radio" name="question1" />
          <div className="option-span">Option 1:</div>
          <input type="text" />
        </label>
        <label>
          <input type="radio" name="question1" />
          <div className="option-span">Option 2:</div>
          <input type="text" />
        </label>
        <label>
          <input type="radio" name="question1" />
          <div className="option-span">Option 3:</div>
          <input type="text" />
        </label>
        <label>
          <input type="radio" name="question1" />
          <div className="option-span">Option 4:</div>
          <input type="text" />
        </label>
      </div>
    </form>
  );
};

export default AddQuestion;
