import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchCommentsStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCommentsStart, fetchDataSuccess, fetchDataFailure } =
  commentsSlice.actions;
export default commentsSlice.reducer;
