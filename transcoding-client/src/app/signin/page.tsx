// signin.jsx
"use client";
// import "@/app/style.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { userExist } from "@/redux/reducer/userReducer";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // Replace this URL with your actual Google login endpoint
      window.open(`${process.env.SERVER}/api/v1/user/login`, "_self");

      // Dispatch userExist action upon successful login
      dispatch(userExist(true));
    } catch (error: any) {
      console.error("Login failed", error);
      setError("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient"></div>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center relative z-10 flex-1">
        <div className="max-w-lg mx-auto rounded-md overflow-hidden shadow-lg bg-gradient-to-br from-yellow-300 via-green-300 to-blue-400 text-gray-800 transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="px-6 py-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 transition duration-300 ease-in-out transform hover:text-purple-600">
                Login with Google
              </h2>
              <p className="text-lg text-gray-700 mt-2 transition duration-300 ease-in-out transform hover:text-purple-600">
                Click below to login with your Google account
              </p>
            </div>
            <div className="mt-6">
              <button
                className={`w-full bg-yellow-300 hover:bg-yellow-400 text-black rounded-md py-3 transition duration-300 ease-in-out transform hover:scale-105 ${
                  loading && "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                {loading ? "Loading..." : "Login with Google"}
              </button>
            </div>
            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
