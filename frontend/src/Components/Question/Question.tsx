import React, { Dispatch, useEffect, useState } from "react";
import "./Question.css";

interface QuestionState {
  question: {
    question: string;
    options: Array<string>;
    answer: string;
  };
  index: number;
  setCorrectAnswer: Dispatch<Array<number>>;
  correctAnswer: Array<number>;
}

const Question: React.FC<QuestionState> = ({
  question,
  index,
  setCorrectAnswer,
  correctAnswer,
}) => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (selected === question.answer) {
      const newArr = [...correctAnswer];
      newArr[index] = 1;
      setCorrectAnswer(newArr);
    } else {
      const newArr = [...correctAnswer];
      newArr[index] = 0;
      setCorrectAnswer(newArr);
    }
    // eslint-disable-next-line
  }, [selected]);

  return (
    <div className="question-card">
      <div className="question-number">{index + 1})</div>
      <div className="right-side">
        <div className="question">{question.question}</div>
        <div className="options">
          {question.options.map((option: string, index: number) => (
            <button
              type="button"
              className={selected === option ? "clicked-button" : ""}
              onClick={() => {
                setSelected(option);
              }}
              key={index}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {question.answer}
    </div>
  );
};

export default Question;
