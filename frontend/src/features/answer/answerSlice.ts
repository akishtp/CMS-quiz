import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { submitTest } from "./answerActions";

interface AnswerState {
  answer: Array<number>;
  marks: number;
  regno: string;
  loading: boolean;
  error: null | string | unknown;
}

const initialState: AnswerState = {
  answer: [],
  marks: 0,
  regno: "",
  loading: false,
  error: null,
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
        state.marks = payload.marks;
      })
      .addCase(submitTest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { stud_signin } = answerSlice.actions;

export default answerSlice.reducer;
