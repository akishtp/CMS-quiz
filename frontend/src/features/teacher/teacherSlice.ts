import { createSlice } from "@reduxjs/toolkit";
import { login } from "./teacherActions";

interface TeacherState {
  teacher: { teacher_id: string; name: string; token: string } | null;
  loading: boolean;
  error: null | string | any;
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
  reducers: {
    logout: (state) => {
      localStorage.removeItem("teacherDetails");
      state.loading = false;
      state.teacher = null;
      state.error = null;
    },
  },
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

export const { logout } = teacherSlice.actions;

export default teacherSlice.reducer;
