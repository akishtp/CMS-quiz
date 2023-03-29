import axios from "axios";
import { useEffect, useState } from "react";
import Question from "../../Components/Question/Question";
import "./Test.css";

const Test: React.FC = () => {
  const [questions, setQuestions] = useState<Array<string>>([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/question");
      setQuestions(data);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="test">
      {questions.length > 0 ? (
        <>
          {questions.map((question: any, index: number) => (
            <Question question={question} index={index} key={question._id} />
          ))}
        </>
      ) : (
        <div className="no-records">No Records! Try adding new Records</div>
      )}
      <button type="submit" className="submit-test">
        Submit Test
      </button>
    </div>
  );
};

export default Test;
