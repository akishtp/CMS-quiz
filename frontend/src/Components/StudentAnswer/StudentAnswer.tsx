import React from "react";

interface StudentAnswerState {
  answer: { regno: string; marks: number };
}

const StudentAnswer: React.FC<StudentAnswerState> = ({ answer }) => {
  return (
    <div className="student-answer">
      <div className="left-side">{answer.regno}</div>
      <div className="right-side">{answer.marks}</div>
    </div>
  );
};

export default StudentAnswer;
