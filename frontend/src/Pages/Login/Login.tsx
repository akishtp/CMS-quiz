import React, { useState } from "react";
import "./Login.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "../../features/teacher/teacherActions";

const Login: React.FC = () => {
  const [teacherId, setTeacherId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading, error } = useAppSelector((state) => state.teacher);
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ teacherId, password }));
  };

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
