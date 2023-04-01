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
        "https://verlow-server.up.railway.app/api/user/login",
        { teacherId, password },
        config
      );
      localStorage.setItem("userDetails", JSON.stringify(data));
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
