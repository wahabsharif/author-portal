// src/store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  firstName: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  firstName: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ firstName: string }>) => {
      state.isAuthenticated = true;
      state.firstName = action.payload.firstName;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.firstName = null;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAuth: (
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
        firstName: string | null;
      }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.firstName = action.payload.firstName;
      state.loading = false;
    },
  },
});

export const { login, logout, setLoading, setAuth } = authSlice.actions;

export default authSlice.reducer;
