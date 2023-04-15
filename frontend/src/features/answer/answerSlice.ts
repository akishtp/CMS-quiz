import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getallAnswers, submitTest } from "./answerActions";

interface AnswerState {
  answer: Array<number>;
  marks: number;
  regno: string;
  loading: boolean;
  error: null | string | unknown;
  allAnswers: Array<{ regno: string; marks: number }>;
}

const initialState: AnswerState = {
  answer: [],
  marks: 0,
  regno: "",
  loading: false,
  error: null,
  allAnswers: [],
};

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    stud_signin: (state, action: PayloadAction<string>) => {
      state.regno = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitTest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.marks = payload.response.marks;
      })
      .addCase(submitTest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getallAnswers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getallAnswers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allAnswers = payload.sendingArray;
      })
      .addCase(getallAnswers.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { stud_signin } = answerSlice.actions;

export default answerSlice.reducer;
