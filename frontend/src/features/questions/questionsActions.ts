import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQuestions = createAsyncThunk(
  "questions/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/blogs");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
