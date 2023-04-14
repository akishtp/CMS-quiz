import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../features/teacher/teacherSlice";
import testReducer from "../features/test/testSlice";
import answerReducer from "../features/answer/answerSlice";

export const store = configureStore({
  reducer: {
    teacher: teacherReducer,
    test: testReducer,
    answer: answerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
