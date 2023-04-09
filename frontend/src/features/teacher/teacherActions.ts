import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async (teacher: any, { rejectWithValue }) => {
    const { teacherId, password } = teacher;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://cms-quiz.up.railway.app/api/teacher/login",
        { teacherId, password },
        config
      );
      localStorage.setItem("teacherDetails", JSON.stringify(data));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
