import { createSlice } from "@reduxjs/toolkit";
import { googleLogin, login } from "../../services/login/login";
import { User } from "firebase/auth";

interface SignInState {
  data: User | null;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

const initialState: SignInState = {
  data: null,
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login reducers
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload as string;
      })

      // Google login reducers
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(googleLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload as string;
      });
  },
});

export default signInSlice.reducer;
