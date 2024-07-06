import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: true,
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
    status: "idle",
    error: null,
  },
  reducer: {
    setCurrentUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
