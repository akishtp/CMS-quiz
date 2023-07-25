import React, { useEffect } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getallTests } from "../../features/test/testActions";
import AllTest from "../../Components/AllTest/AllTest";

const Dashboard: React.FC = () => {
  const { teacher } = useAppSelector((state) => state.teacher);
  const { allTestsByTeacher, loading } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const GettingAllTest = async () => {
      await dispatch(getallTests({ token: teacher?.token }));
    };
    if (teacher === null) {
      navigate("/login");
    } else {
      GettingAllTest();
    }
  }, [navigate, teacher, dispatch]);

  if (loading) {
    return <div className="loading">Loading..</div>;
  }

  return (
    <div className="dashboard">
      <div className="greeting">Hey 👋, {teacher?.name} teacher</div>
      {allTestsByTeacher.length > 0 ? (
        <div className="tests-wrapper">
          {allTestsByTeacher.map((testDetails, index) => {
            return <AllTest testDetails={testDetails} key={index} />;
          })}
        </div>
      ) : (
        <>no tests</>
      )}
      <Link to="/new" className="new-test">
        +<span>New Test</span>
      </Link>
    </div>
  );
};

export default Dashboard;
