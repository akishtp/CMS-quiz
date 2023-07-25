import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { signup } from "../../features/teacher/teacherActions";

const Signup: React.FC = () => {
  const [teacher_id, setTeacher_id] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading, error } = useAppSelector((state) => state.teacher);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(signup({ teacher_id, password, name })).then(() => {
      navigate("/teacher");
    });
  };
  return (
    <div className="login">
      <form onSubmit={(e) => handleSignup(e)}>
        {loading ? (
          <div className="loading">loading</div>
        ) : (
          <>
            {error && <div className="error">{error}</div>}
            <label>
              Teacher Id:
              <input
                type="text"
                value={teacher_id}
                onChange={(e) => setTeacher_id(e.target.value)}
              />
            </label>
            <label>
              Name :
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
            <button type="submit">Signup</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Signup;
