// Page.jsx
"use client";
import "@/app/style.css";
import { Button } from "@/components/ui/button";
import {
  RootState,
  userExist,
  userNotExist,
} from "@/redux/reducer/userReducer";
import axios from "axios";
import { Video } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.SERVER}/api/v1/user/current-user`, {
        withCredentials: true,
      })
      .then((res) => dispatch(userExist(res.data.data)))
      .catch((err) => dispatch(userNotExist()));
  }, [dispatch]);

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.userReducer
  );
  const { user } = useSelector((state: RootState) => state.userReducer);
  if (user) return redirect("/upload");
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-gradient"></div>
      </div>

      {/* Content */}
      <div className="px-4 lg:px-6 h-14 flex items-center justify-between mt-2 relative z-10">
        <Link className="flex items-center justify-center" href="/">
          <Video className="h-6 w-6 text-yellow-300 animate-bounce" />
        </Link>

        <Button
          className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-md px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => router.push("/signin")}
        >
          Signup
        </Button>
      </div>
      <main className="flex justify-center items-center relative z-10 flex-1">
        <section className="w-full py-10 md:py-18 lg:py-28 text-center">
          <div className="container max-w-screen-lg">
            {/* Animated heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-white mb-6 transform hover:rotate-1 transition duration-300 ease-in-out cursor-pointer">
              Effortless Video Conversion for Every Format, Every Device
            </h1>
            {/* Animated paragraph */}
            <p className="text-white text-lg md:text-xl lg:text-base xl:text-lg mb-8 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
              Welcome to Your Ultimate Video Transcoding Solution! Transforming
              your video content has never been easier. Our powerful API
              effortlessly converts your videos into the formats you need,
              ensuring compatibility across all devices. Whether you&apos;re a
              content creator, a developer, or a business, our service
              guarantees high-quality transcoding with minimal effort.
            </p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
              {isAuthenticated ? (
                <Button
                  className="bg-green-400 hover:bg-green-500 text-black rounded-lg px-8 py-3 transform hover:scale-105 transition duration-600 ease-in-out animate-bounce"
                  onClick={() => router.push("/upload")}
                >
                  Get started
                </Button>
              ) : (
                <Button
                  className="bg-blue-400 hover:bg-blue-500 text-black rounded-lg px-8 py-3 transform hover:scale-105 transition duration-300 ease-in-out"
                  onClick={() => router.push("/signin")}
                >
                  Get started
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
