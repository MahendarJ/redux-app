import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Mahendar" },
  { id: "1", name: "Singh" },
  { id: "2", name: "Dhoni" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
