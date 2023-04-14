import { createSlice } from "@reduxjs/toolkit";
import { addTest, getTest, getallTests } from "./testActions";

interface TestState {
  questions: any;
  subject: string;
  teacher: string;
  loading: boolean;
  error: null | string | unknown;
  allTestsByTeacher: Array<{
    subject: string;
    noOfSubmissions: number;
    createdAt: string;
  }>;
}

const initialState: TestState = {
  questions: [],
  subject: "",
  teacher: "",
  loading: false,
  error: null,
  allTestsByTeacher: [],
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
      })
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
      })
      .addCase(getallTests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getallTests.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.allTestsByTeacher = payload;
      })
      .addCase(getallTests.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default testSlice.reducer;
