// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  onAuthStateChangedListener,
  getUser,
  signOutUser,
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
          return { error: { status: "CUSTOM_ERROR", error: error?.message } };
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
          return { error: { status: "CUSTOM_ERROR", error: error?.message } };
        }
      },
    }),
    googleSignIn: builder.mutation({
      async queryFn() {
        try {
          const userCredential = await signInWithGooglePopup();
          await createUserDocumentFromAuth(userCredential.user, {
            username: userCredential.user.displayName,
          });
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error?.message } };
        }
      },
    }),
    logout: builder.mutation({
      async queryFn() {
        try {
          await signOutUser();
        } catch (error) {
          return { error: { status: "CUSTOM_ERROR", error: error?.message } };
        }
      },
    }),
    getUserData: builder.query({
      async queryFn() {
        return new Promise((resolve, reject) => {
          const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
              await createUserDocumentFromAuth(user);
              const userSnapshot = await getUser(user.uid);
              resolve({ data: userSnapshot.data() });
            } else {
              resolve({ data: null });
            }
          });
          return () => unsubscribe();
        });
      },
      //   keepUnusedDataFor: Infinity,
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGoogleSignInMutation,
  useLogoutMutation,
  useGetUserDataQuery,
} = apiSlice;
