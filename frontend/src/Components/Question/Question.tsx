import React from "react";
import "./Question.css";

const Question: React.FC = () => {
  return (
    <div className="question-card">
      <div className="question-number">1</div>
      <form action="" className="right-side">
        <div className="question">
          Would you answer me if i asked you a question?
        </div>
        <div className="options">
          <button>Yes</button>
          <button>Maybe? Maybe not.</button>
          <button>Probably</button>
          <button>Ask first</button>
        </div>
      </form>
    </div>
  );
};

export default Question;
