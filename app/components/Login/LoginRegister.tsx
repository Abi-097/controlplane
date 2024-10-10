"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { AppDispatch, RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
// import { googleLogin, login } from "@/app/store/services/login/login";
import bcrypt from "bcryptjs";
import { nueUsers } from "@/public/data/users";
import { GrAd } from "react-icons/gr";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const content = [
  {
    id: 1,
    main: "Support any business model",
    sec: "Host code that you don't want to share with the world in private.",
  },
  {
    id: 2,
    main: "Support any business model",
    sec: "Host code that you don’t want to share with the world in private.",
  },
  {
    id: 3,
    main: "Support any business model",
    sec: "Host code that you don’t want to share with the world in private.",
  },
  {
    id: 4,
    main: "Support any business model",
    sec: "Host code that you don’t want to share with the world in private.",
  },
  {
    id: 5,
    main: "Support any business model",
    sec: "Host code that you don’t want to share with the world in private.",
  },
  {
    id: 6,
    main: "Support any business model",
    sec: "Host code that you don’t want to share with the world in private.",
  },
];

export default function LoginRegister() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = async () => {
    const user = nueUsers.find((u) => u.email === email);

    if (user && bcrypt.compareSync(password, user.password)) {
      try {
        // Fetch session info from ipapi
        const response = await fetch("https://ipapi.co/json");
        const sessionInfo = await response.json();

        // Store user info and session info in localStorage/sessionStorage
        const userInfo = {
          email,
          session: sessionInfo, // Store IP, location, etc.
        };

        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userInfo));
        } else {
          sessionStorage.setItem("user", JSON.stringify(userInfo));
        }

        // Redirect to settings page after successful login
        router.push("/contact");
      } catch (error) {
        console.error("Error fetching session info:", error);
        setErrorMessage("Failed to fetch session info. Please try again.");
      }
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="flex h-screen">
      <div className="w-[35%] bg-[#1D4ED8] hidden md:block">
        <div className="flex items-center h-full p-14">
          <div>
            <span className="flex items-center gap-2">
              <GrAd size={25} className="text-white" />
              <p className="text-xl text-white font-semibold">DataNue</p>
            </span>
            <p className="text-[24px] text-white font-semibold">
              Explore the world&#39;s leading platform
            </p>

            {content.map((text, id) => (
              <span key={id} className="">
                <div className="flex items-center gap-2 mt-9">
                  <IoIosCheckmarkCircleOutline
                    size={20}
                    className="text-white"
                  />
                  <p className="text-xl text-white">{text.main}</p>
                </div>
                <p className="text-sm text-white pt-2 ml-7">{text.sec}</p>
              </span>
            ))}
            <div className="rounded-md bg-white w-4 h-4 p-2">
              <IoIosCheckmarkCircleOutline />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[65%] bg-[#EDF5FA] flex items-center justify-center">
        {/* Right Side - Green Background */}
        <div className="w-full max-w-2xl p-16 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            {/* {forgotPassword ? "Reset Password" : "Welcome Back"} */}
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Label htmlFor="email" className="text-md">
                Email
              </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-5">
              {!forgotPassword && (
                <div>
                  <Label htmlFor="password" className="text-md">
                    Password
                  </Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=""
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
                      <Label htmlFor="rememberMe" className="text-md">
                        Remember Me
                      </Label>
                    </div>
                    {/* <button
                      type="button"
                      onClick={() => setForgotPassword(true)}
                      className="text-blue-500 hover:underline"
                    >
                      Forgot Password?
                    </button> */}
                  </div>

                  <button
                    type="submit"
                    // disabled={isLoading}
                    className="w-full bg-[#57534E] text-white py-2 rounded"
                  >
                    {/* {isLoading ? "Logging in..." : "Login to your account"} */}
                    Login to your account
                  </button>
                  <div className="flex items-center my-8">
                    <hr className="w-full border-gray-300" />
                    <span className="px-2 text-gray-500">OR</span>
                    <hr className="w-full border-gray-300" />
                  </div>

                  <div className="flex justify-center mt-8">
                    <div
                      // onClick={handleGoogleSignIn}
                      className="cursor-pointer bg-white border border-gray-300 rounded-full p-4 hover:border-blue-500"
                    >
                      <Image
                        src="/icons/google.png"
                        alt="Google"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <p>Credentials: test@email.com || password: Teams@321</p>
                </div>
              )}
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
