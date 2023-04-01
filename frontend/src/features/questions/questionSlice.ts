import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "./questionsActions";

interface QuestionsState {
  questions: any;
  loading: boolean;
  error: null | string | unknown;
}

const initialState: QuestionsState = {
  questions: [],
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuestions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.questions = payload;
      })
      .addCase(getQuestions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default questionSlice.reducer;
