import React, { useEffect, useState } from "react";
import "./AddQuestion.css";

interface addQuestionState {
  index: number;
}

const AddQuestion: React.FC<addQuestionState> = ({ index }) => {
  const [question, setQuestion] = useState<string>(
    "type your question here ..."
  );
  const [options, setOptions] = useState<Array<string>>([
    "option 1",
    "option 2",
    "option 3",
    "option 4",
  ]);
  const [answer, setAnswer] = useState<string>(options[0]);

  return (
    <div className="add-question">
      <label>
        Question {index + 1}:
        <textarea
          rows={5}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
      </label>
      <div className="add-options">
        <label>
          <input
            type="radio"
            name={`question${index}`}
            defaultChecked
            value={options[0]}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <div className="option-span">Option 1:</div>
          <input
            required
            type="text"
            value={options[0]}
            onChange={(e) => {
              if (answer === options[0]) setAnswer(e.target.value);
              const newArr = [...options]; // make a copy of the array to modify
              newArr[0] = e.target.value; // change the value at index 2 to 10
              setOptions(newArr);
            }}
          />
        </label>
        <label>
          <input
            type="radio"
            name={`question${index}`}
            value={options[1]}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <div className="option-span">Option 2:</div>
          <input
            required
            type="text"
            value={options[1]}
            onChange={(e) => {
              if (answer === options[1]) setAnswer(e.target.value);
              const newArr = [...options]; // make a copy of the array to modify
              newArr[1] = e.target.value; // change the value at index 2 to 10
              setOptions(newArr);
            }}
          />
        </label>
        <label>
          <input
            type="radio"
            name={`question${index}`}
            value={options[2]}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <div className="option-span">Option 3:</div>
          <input
            required
            type="text"
            value={options[2]}
            onChange={(e) => {
              if (answer === options[2]) setAnswer(e.target.value);
              const newArr = [...options]; // make a copy of the array to modify
              newArr[2] = e.target.value; // change the value at index 2 to 10
              setOptions(newArr);
            }}
          />
        </label>
        <label>
          <input
            type="radio"
            name={`question${index}`}
            value={options[3]}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          />
          <div className="option-span">Option 4:</div>
          <input
            required
            type="text"
            value={options[3]}
            onChange={(e) => {
              if (answer === options[3]) setAnswer(e.target.value);
              const newArr = [...options]; // make a copy of the array to modify
              newArr[3] = e.target.value; // change the value at index 2 to 10
              setOptions(newArr);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default AddQuestion;
