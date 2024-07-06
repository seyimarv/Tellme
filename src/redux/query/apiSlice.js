// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/auth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    signup: builder.mutation({
      async queryFn({ email, password, additionalInfo }) {
        try {
          const userCredential = await createAuthUserWithEmailAndPassword(
            email,
            password
          );
          await createUserDocumentFromAuth(userCredential.user, additionalInfo);
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
    }),
    login: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInAuthUserWithEmailAndPassword(
            email,
            password
          );
          return { data: userCredential.user };
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = apiSlice;
