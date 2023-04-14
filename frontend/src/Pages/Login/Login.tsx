import React, { useEffect, useState } from "react";
import "./Login.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../features/teacher/teacherActions";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [teacherId, setTeacherId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { teacher, loading } = useAppSelector((state) => state.teacher);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(login({ teacher_id: teacherId, password }));
  };

  useEffect(() => {
    if (teacher != null) {
      navigate("/teacher");
    }
  }, [navigate, teacher]);

  if (loading) {
    return <div className="loading">Loading..</div>;
  }

  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <label>
          Teacher Id:
          <input
            type="text"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
