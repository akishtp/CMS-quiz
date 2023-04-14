import { createSlice } from "@reduxjs/toolkit";
import { addTest, getTest } from "./testActions";

interface TestState {
  questions: any;
  subject: string;
  teacher: string;
  loading: boolean;
  error: null | string | unknown;
}

const initialState: TestState = {
  questions: [],
  subject: "",
  teacher: "",
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
      .addCase(addTest.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addTest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    builder
      .addCase(getTest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.questions = payload.questions;
        state.subject = payload.subject;
        state.teacher = payload.teacher;
      })
      .addCase(getTest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default testSlice.reducer;
