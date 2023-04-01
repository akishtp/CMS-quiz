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
        "/api/teacher/login",
        { teacherId, password },
        config
      );
      localStorage.setItem("userDetails", JSON.stringify(data));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
