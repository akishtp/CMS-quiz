import React, { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
const Submit: React.FC = () => {
  const { regno, marks } = useAppSelector((state) => state.answer);
  useEffect(() => {
    // do nothing
  }, [marks]);

  return (
    <div className="marks">
      <div>Register number : {regno}</div>
      <div>Your Marks : {marks}</div>
      <div>Submitted at : {new Date().toLocaleString()}</div>
    </div>
  );
};

export default Submit;
