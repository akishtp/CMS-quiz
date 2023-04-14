import React, { useState } from "react";
import "./Home.css";
import { stud_signin } from "../../features/answer/answerSlice";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [regno, setRegno] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [examCode, setExamCode] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(stud_signin(regno));
    navigate(`/test/${examCode}`);
  };

  return (
    <div className="home">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Register Number:
          <input
            type="text"
            value={regno}
            onChange={(e) => setRegno(e.target.value)}
          />
        </label>
        <label>
          DOB:
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            min="1997-01-01"
            max="2007-12-31"
          />
        </label>
        <label>
          Exam Code:
          <input
            type="text"
            placeholder="ask your teacher for the code.."
            value={examCode}
            onChange={(e) => setExamCode(e.target.value)}
          />
        </label>
        <button type="submit">Start Test</button>
      </form>
    </div>
  );
};

export default Home;
