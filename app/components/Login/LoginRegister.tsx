"use client";
import { auth, googleProvider } from "../../../firebase/firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginRegister() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (rememberMe) {
        // If 'Remember Me' is checked, keep the user logged in
        localStorage.setItem("user", JSON.stringify(userCredential.user));
      }

      router.push("/contact");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      router.push("/contact");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent to your email.");
    } catch (error) {
      alert((error as Error).message);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle login logic
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-200">
      <div className="w-full max-w-sm bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-6">
          {forgotPassword ? "Reset Password" : "Welcome Back"}
        </h1>
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 w-full p-2 border rounded"
        />
        {!forgotPassword && (
          <div>
            <Label htmlFor="password" className="text-sm">
              Password
            </Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="mb-4 w-full p-2 border rounded"
            />
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                <Label htmlFor="rememberMe" className="text-sm">
                  Remember Me
                </Label>
              </div>
              <button
                onClick={() => setForgotPassword(true)}
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot Password?
              </button>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              Login
            </button>
            <div className="flex items-center my-4">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-red-500 text-white py-2 rounded"
            >
              Sign in with Google
            </button>
          </div>
        )}
        {forgotPassword && (
          <button
            onClick={handleForgotPassword}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Send Reset Link
          </button>
        )}
        <p className="text-xs text-center text-gray-600 mt-4">
          By proceeding, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Use
          </a>{" "}
          and confirm you have read our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy and Cookie Statement
          </a>
          .
        </p>
      </div>
    </div>
  );
}
