import { createSlice } from "@reduxjs/toolkit";

export const LoginSingupSlice = createSlice({
  name: "loginSignup",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.error = action.payload;
    },
    dataNull: (state) => {
      state.data = null;
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure ,dataNull} = LoginSingupSlice.actions;
export default LoginSingupSlice.reducer;
