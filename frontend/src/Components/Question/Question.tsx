import React from "react";
import "./Question.css";

interface QuestionState {
  question: {
    question: string;
    options: Array<string>;
    answer: string;
  };
  index: number;
}

const Question: React.FC<QuestionState> = ({ question, index }) => {
  return (
    <div className="question-card">
      <div className="question-number">{index + 1}</div>
      <form action="" className="right-side">
        <div className="question">{question.question}</div>
        <div className="options">
          {question.options.map((option: any) => (
            <button>{option}</button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Question;
