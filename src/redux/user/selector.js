import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.user.user;

export const selectisAuthenticated = (state) => state.user.isAuthenticated;
