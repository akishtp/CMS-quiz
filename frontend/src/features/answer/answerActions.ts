import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SubmitTestState {
  answer: Array<number>;
  regno: string;
  test_id: string | undefined;
}

export const submitTest = createAsyncThunk(
  "test/submit",
  async ({ answer, regno, test_id }: SubmitTestState, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "https://cms-quiz.up.railway.app/api/answer/",
        { answer, regno, test_id },
        config
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
