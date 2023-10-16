import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counter/counterSlice";
import commentsSlice from "../feature/comments/commentsSlice";
import LikeSlice from "../feature/account-like/LikeSlice";
import LoginSingupSlice from "../feature/login-signup/LoginSignupSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    comments:commentsSlice,
    like:LikeSlice,
    loginSignup: LoginSingupSlice
  },
});
