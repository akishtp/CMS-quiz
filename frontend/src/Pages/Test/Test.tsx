import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getTest } from "../../features/test/testActions";
import "./Test.css";
import { useNavigate, useParams } from "react-router-dom";
import Question from "../../Components/Question/Question";
import { submitTest } from "../../features/answer/answerActions";

type TestParams = {
  id: string;
};

const Test: React.FC = () => {
  const { id } = useParams<TestParams>();
  const [correctAnswer, setCorrectAnswer] = useState<Array<number>>([]);

  const { questions, subject, teacher, loading, error } = useAppSelector(
    (state) => state.test
  );
  const { regno } = useAppSelector((state) => state.answer);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(submitTest({ answer: correctAnswer, test_id: id, regno }));
    navigate(`/submit`);
  };

  useEffect(() => {
    dispatch(getTest({ test_id: id }));
  }, [dispatch, id]);

  if (loading) {
    return <div className="loading">Loading..</div>;
  }

  if (error) {
    return <div className="error">error</div>;
  }
  return (
    <form className="test" onSubmit={(e) => handleSubmit(e)}>
      <div className="top-line">
        <div className="left-side">Subject : {subject}</div>
        <div className="right-side">Teacher: {teacher}</div>
      </div>
      {questions.map(
        (
          question: {
            question: string;
            options: Array<string>;
            answer: string;
            _id: string;
          },
          index: number
        ) => {
          return (
            <Question
              key={question._id}
              index={index}
              question={question}
              setCorrectAnswer={setCorrectAnswer}
              correctAnswer={correctAnswer}
            />
          );
        }
      )}
      <button className="submit-test">Submit</button>
    </form>
  );
};

export default Test;
