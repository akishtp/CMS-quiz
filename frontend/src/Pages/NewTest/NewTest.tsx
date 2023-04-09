import React, { useEffect, useState } from "react";
import "./NewTest.css";
import AddQuestion from "../../Components/AddQuestion/AddQuestion";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTest } from "../../features/test/testActions";
import { useNavigate } from "react-router-dom";

const NewTest: React.FC = () => {
  const [noOfQs, setNoOfQs] = useState<number>(1);
  const [subject, setSubject] = useState<string>("");
  const [questions, setQuestions] = useState<Array<any>>([
    {
      question: "question1",
      options: ["one", "two", "three", "four"],
      answer: "one",
    },
  ]);

  const { teacher } = useAppSelector((state) => state.teacher);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddTest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTest({ subject, questions, token: teacher?.token }));
  };

  useEffect(() => {
    if (teacher === null) {
      navigate("/");
    }
  }, [navigate, teacher]);

  return (
    <form className="newTest" onSubmit={(e) => handleAddTest(e)}>
      <label>
        Subject:
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </label>
      {Array.from(Array(noOfQs), (e, i) => {
        return <AddQuestion key={i} index={i} />;
      })}
      <div className="end-buttons">
        <button
          className="more-questions"
          onClick={() => setNoOfQs(noOfQs + 1)}
          type="button"
        >
          More Questions
        </button>
        <button className="create-test">Create Test</button>
      </div>
    </form>
  );
};

export default NewTest;
