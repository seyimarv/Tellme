import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    // user: {
    //   name: "",
    //   userName: "",
    //   follower: [],
    //   following: [],
    //   preferences: {
    //     tags: [],
    //   },
    //   profilePicture: "",
    // },
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    clearCurrentUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
