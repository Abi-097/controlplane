import { auth, googleProvider } from "@/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

// Async thunk for handling login with email and password
export const login = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user; // Returning user data
    } catch (error) {
      return rejectWithValue((error as Error).message); // Handling errors
    }
  }
);

// Async thunk for handling Google login
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (_, { rejectWithValue }) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result.user; // Returning user data
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
