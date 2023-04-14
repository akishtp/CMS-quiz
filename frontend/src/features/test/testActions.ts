import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface AddTestState {
  questions: Array<{
    question: string;
    options: Array<string>;
    answer: string;
  }>;
  subject: string;
  token: string | undefined;
}

interface GetTestState {
  test_id: string | undefined;
}

export const addTest = createAsyncThunk(
  "test/add",
  async ({ questions, subject, token }: AddTestState, { rejectWithValue }) => {
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

export const getTest = createAsyncThunk(
  "test/get",
  async ({ test_id }: GetTestState, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://cms-quiz.up.railway.app/api/test/${test_id}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.error.message);
    }
  }
);
