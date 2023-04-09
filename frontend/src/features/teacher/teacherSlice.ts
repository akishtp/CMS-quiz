import { createSlice } from "@reduxjs/toolkit";
import { login } from "./teacherActions";

interface TeacherState {
  teacher: { teacherId: string; name: string; token: string } | null;
  loading: boolean;
  error: null | string | unknown;
}

const teacher = localStorage.getItem("teacherDetails")
  ? JSON.parse(localStorage.getItem("teacherDetails") as any)
  : null;

const initialState: TeacherState = {
  teacher,
  loading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.teacher = payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default teacherSlice.reducer;
