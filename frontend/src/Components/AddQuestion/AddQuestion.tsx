import React, { useEffect, useState, Dispatch } from "react";
import "./AddQuestion.css";

interface addQuestionState {
  index: number;
  setQuestions: Dispatch<
    Array<{ question: string; options: Array<string>; answer: string }>
  >;
  questions: Array<{
    question: string;
    options: Array<string>;
    answer: string;
  }>;
}

const AddQuestion: React.FC<addQuestionState> = ({
  index,
  setQuestions,
  questions,
}) => {
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

  useEffect(() => {
    const newArr = [...questions];
    newArr[index] = { question, options, answer };
    setQuestions(newArr);
    // eslint-disable-next-line
  }, [question, options, answer]);

  return (
    <div className="add-question">
      <label>
        Question {index + 1}:
        <textarea
          required
          rows={5}
          value={question}
          onClick={() => {
            if (question === "type your question here ...") {
              setQuestion("");
            }
          }}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
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
            onClick={() => {
              if (options[0] === "option 1") {
                const newArr = [...options];
                newArr[0] = "";
                setOptions(newArr);
              }
            }}
            value={options[0]}
            onChange={(e) => {
              if (answer === options[0]) setAnswer(e.target.value);
              const newArr = [...options];
              newArr[0] = e.target.value;
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
            onClick={() => {
              if (options[1] === "option 2") {
                const newArr = [...options];
                newArr[1] = "";
                setOptions(newArr);
              }
            }}
            value={options[1]}
            onChange={(e) => {
              if (answer === options[1]) setAnswer(e.target.value);
              const newArr = [...options];
              newArr[1] = e.target.value;
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
            onClick={() => {
              if (options[2] === "option 3") {
                const newArr = [...options];
                newArr[2] = "";
                setOptions(newArr);
              }
            }}
            value={options[2]}
            onChange={(e) => {
              if (answer === options[2]) setAnswer(e.target.value);
              const newArr = [...options];
              newArr[2] = e.target.value;
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
            onClick={() => {
              if (options[3] === "option 4") {
                const newArr = [...options];
                newArr[3] = "";
                setOptions(newArr);
              }
            }}
            value={options[3]}
            onChange={(e) => {
              if (answer === options[3]) setAnswer(e.target.value);
              const newArr = [...options];
              newArr[3] = e.target.value;
              setOptions(newArr);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default AddQuestion;
