import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface addTestState {
  questions: Array<string>;
  subject: string;
  token: string | undefined;
}

export const addTest = createAsyncThunk(
  "record/add",
  async ({ questions, subject, token }: addTestState, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.post(
        "https://cms-quiz.up.railway.app/api/test/",
        { questions, subject },
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
