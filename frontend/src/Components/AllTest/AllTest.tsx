import React from "react";

interface AllTestsState {
  testDetails: {
    subject: string;
    noOfSubmissions: number;
    createdAt: string;
  };
}

const AllTest: React.FC<AllTestsState> = ({ testDetails }) => {
  var created_date = new Date(testDetails.createdAt);
  var timestamp = created_date.getTime();
  const finalDate = new Date(timestamp);
  return (
    <div className="all-test">
      <div className="left-side">{testDetails.subject}</div>
      <div className="middle-side">{finalDate.toLocaleString()}</div>
      <div className="right-side">{testDetails.noOfSubmissions}</div>
    </div>
  );
};

export default AllTest;
