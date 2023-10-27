import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_USER_INFO = "http://127.0.0.1:8000/users/postuser/";
const GET_USER_INFO = `http://127.0.0.1:8000/users/getuser/`;
const EDIT_USER_INFO = `http://127.0.0.1:8000/users/edituser/165b64f1-dc79-4790-bcec-cb3796781759`;
const DELETE_USER_INFO = `http://127.0.0.1:8000/users/deleteuser`;

export const postUserInfo = createAsyncThunk(
  "post/postUserInfo",
  async (initialData) => {
    try {
      const response = await axios.post(POST_USER_INFO, initialData);
      console.log(response?.data);
      return response?.data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const getUserInfo = createAsyncThunk("get/getUserInfo", async () => {
  try {
    const response = await axios.get(GET_USER_INFO);
    console.log(response?.data);
    return response?.data;
  } catch (err) {
    console.log(err);
  }
});

export const editUserInfo = createAsyncThunk(
  "edit/editUserInfo",
  async (initialData) => {
    try {
      const response = await axios.put(EDIT_USER_INFO, initialData);
      console.log(response?.data);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteUserInfo = createAsyncThunk(
  "delete/deleteUserInfo",
  async () => {
    try {
      const response = await axios.delete(`${DELETE_USER_INFO}/1c35ecef-8b5c-4607-84ed-ccaeb16b14a0`);
      console.log(response?.data);
      return response?.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

const postUserSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {},
  extraReducer(builder) {
    builder
      .addCase(postUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addcase(postUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(postUserInfo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const selectDataUserInfo = (state) => state.userinfo.data;
export const selectStatusUserInfo = (state) => state.userinfo.status;
export const selectErrorUserInfo = (state) => state.userinfo.error;

export default postUserSlice.reducer;
