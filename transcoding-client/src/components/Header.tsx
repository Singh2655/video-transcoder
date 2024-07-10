// Header.jsx
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "./ui/use-toast";
import { useDispatch } from "react-redux";
import { userNotExist } from "@/redux/reducer/userReducer";

const Header = ({ user }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.SERVER}/api/v1/user/logout`,
        { withCredentials: true }
      );
      dispatch(userNotExist());
      toast({ title: data.message });
      router.push("/");
    } catch (error) {
      console.error("Error occurred during sign out:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <header className="flex h-16 items-center justify-between border-b border-gray-200 px-4 md:px-6 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition duration-300"
          passHref
        >
          Transcoder
        </Link>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-lg text-gray-600 dark:text-gray-300 px-4 py-2 rounded-md bg-transparent border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition duration-300"
            onClick={handleSignOut}
          >
            Sign out
          </button>

          <div className="relative">
            <Avatar>
              <AvatarImage
                src={user ? `${user.avatar}` : "https://github.com/shadcn.png"}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
