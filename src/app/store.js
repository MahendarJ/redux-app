import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../feature/counter/counterSlice";
import commentsSlice from "../feature/comments/commentsSlice";
import LikeSlice from "../feature/account-like/LikeSlice";
import LoginSingupSlice from "../feature/login-signup/LoginSignupSlice";
import postReducer from "../feature/blog-post/posts/postSlice";
import userReducer from "../feature/blog-post/users/usersSlice";
import postUserSlice from "../feature/user-details/UserDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    comments: commentsSlice,
    like: LikeSlice,
    loginSignup: LoginSingupSlice,
    posts: postReducer,
    users: userReducer,
    userinfo:postUserSlice,
  },
});
