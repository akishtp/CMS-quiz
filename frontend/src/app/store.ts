import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questions/questionSlice";
import teacherReducer from "../features/teacher/teacherSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    teacher: teacherReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
