import { createSlice } from "@reduxjs/toolkit";
import { action } from "../../pages/RegisterPage";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {},
    userWatchlist: {},
  },
  reducers: {
    onLogin(state, action) {
      state.isLoggedIn = true;
    },
    onLogout(state, action) {
      localStorage.removeItem("token");
      state.isLoggedIn = false;
      state.user = {};
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
    setUserWatchlist(state, action) {
      state.userWatchlist = action.payload.user.result;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
