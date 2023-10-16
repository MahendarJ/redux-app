import { createSlice } from "@reduxjs/toolkit";

export const LoginSingupSlice = createSlice({
  name: 'loginSignup',
  initialState: {
    data: null,
    error:null
  },
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
    },
    fetchDataFailure:(state,action) =>{
      state.error = action.payload;
    }
  },
});

export const { fetchDataSuccess, fetchDataFailure} = LoginSingupSlice.actions;
export default LoginSingupSlice.reducer;
