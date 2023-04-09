import { createSlice } from "@reduxjs/toolkit";
import { addTest } from "./testActions";

interface TestState {
  questions: any;
  subject: any;
  loading: boolean;
  error: null | string | unknown;
}

const initialState: TestState = {
  questions: [],
  subject: {},
  loading: false,
  error: null,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.questions = payload.questions;
        state.subject = payload.subject;
      })
      .addCase(addTest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default testSlice.reducer;
