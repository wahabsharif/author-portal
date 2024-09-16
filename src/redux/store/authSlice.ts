import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Author {
  first_name: string;
}

interface LoginResponse {
  token: string;
  author: Author;
}

interface LoginRequest {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<
  { token: string; firstName: string },
  LoginRequest,
  { rejectValue: string }
>("auth/loginUser", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}login`,
      {
        email,
        password,
      }
    );
    const { token, author } = response.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("first_name", author.first_name);
    return { token, firstName: author.first_name };
  } catch (error) {
    return thunkAPI.rejectWithValue("Invalid email or password");
  }
});

interface AuthState {
  isAuthenticated: boolean;
  firstName: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  firstName: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      sessionStorage.clear();
      state.isAuthenticated = false;
      state.firstName = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.firstName = action.payload.firstName;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
