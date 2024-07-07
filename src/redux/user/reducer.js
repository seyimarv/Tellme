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
  },
  reducers: {
    setCurrentUser(state, action) {
      state.user = action.payload;
    },
    clearCurrentUser(state) {
      state.user = null;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;


