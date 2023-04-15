import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/teacher/teacherSlice";

const Navbar: React.FC = () => {
  const { teacher } = useAppSelector((state) => state.teacher);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/">CMS</Link>
      {teacher && (
        <div className="teacher-links">
          <Link to="/teacher" className="dashboard">
            Dashboard
          </Link>
          <div className="logout" onClick={() => logoutHandler()}>
            Logout 📤
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
