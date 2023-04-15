import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getallAnswers } from "../../features/answer/answerActions";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import StudentAnswer from "../../Components/StudentAnswer/StudentAnswer";
import "./TestDetails.css";

type TestDetailsParams = {
  id: string;
};

const TestDetails: React.FC = () => {
  const { id } = useParams<TestDetailsParams>();
  const { teacher } = useAppSelector((state) => state.teacher);
  const { allAnswers } = useAppSelector((state) => state.answer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const GettingAllAnswers = async () => {
      await dispatch(getallAnswers({ token: teacher?.token, test_id: id }));
    };
    if (teacher === null) {
      navigate("/teacher");
    } else {
      GettingAllAnswers();
    }
  }, [navigate, teacher, dispatch, id]);

  return (
    <div className="test-details">
      <div
        className="copy-test-code"
        onClick={() =>
          navigator.clipboard.writeText(`http://localhost:3000/test/${id}`)
        }
      >
        <div>{id}</div>
        <button className="copy-button">copy</button>
      </div>
      {allAnswers.length > 0 ? (
        <>
          {allAnswers.map((answer, index) => {
            return <StudentAnswer key={index} answer={answer} />;
          })}
        </>
      ) : (
        <>No answers yet</>
      )}
    </div>
  );
};

export default TestDetails;
