import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counter/counterSlice";
import commentsSlice from "../feature/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    comments:commentsSlice
  },
});
