import React, { useState } from "react";
import "./SingleQuestion.css";

const SingleQuestion: React.FC = () => {
  const [option1, setOption1] = useState("otion 1");
  return (
    <div className="single-question">
      <div className="question">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        animi ratione odio ex necessitatibus laboriosam, facilis earum nisi quos
        aut esse minima quaerat quidem non similique, explicabo optio vel libero
        ?
      </div>
      <div className="options">
        <input type="radio" value={option1} name="gender" /> Answer 1
        <input type="radio" value={option1} name="gender" /> Answer 2
        <input type="radio" value={option1} name="gender" /> Answer 3
        <input type="radio" value={option1} name="gender" /> Answer 4
      </div>
    </div>
  );
};

export default SingleQuestion;
