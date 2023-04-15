import React from "react";
import { useNavigate } from "react-router-dom";

interface AllTestsState {
  testDetails: {
    test_id: string;
    subject: string;
    noOfSubmissions: number;
    createdAt: string;
  };
}

const AllTest: React.FC<AllTestsState> = ({ testDetails }) => {
  var created_date = new Date(testDetails.createdAt);
  var timestamp = created_date.getTime();
  const finalDate = new Date(timestamp);

  const navigate = useNavigate();

  const ToTestDetails = () => {
    navigate(`/teacher/${testDetails.test_id}`);
  };
  return (
    <div className="all-test" onClick={() => ToTestDetails}>
      <div className="left-side">{testDetails.subject}</div>
      <div className="middle-side">{finalDate.toLocaleString()}</div>
      <div className="right-side">{testDetails.noOfSubmissions}</div>
    </div>
  );
};

export default AllTest;
