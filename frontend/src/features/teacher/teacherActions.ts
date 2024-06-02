import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "teacher/login",
  async (teacher: any, { rejectWithValue }) => {
    const { teacher_id, password } = teacher;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://cms-quiz-xlt7.onrender.com/api/teacher/login",
        { teacher_id, password },
        config
      );
      localStorage.setItem("teacherDetails", JSON.stringify(data));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

export const signup = createAsyncThunk(
  "teacher/signup",
  async (teacher: any, { rejectWithValue }) => {
    const { teacher_id, name, password } = teacher;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://cms-quiz-xlt7.onrender.com/api/teacher/signup",
        { teacher_id, name, password },
        config
      );
      localStorage.setItem("teacherDetails", JSON.stringify(data));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
