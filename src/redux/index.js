import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/reducer";
import { apiSlice } from "./query/apiSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
