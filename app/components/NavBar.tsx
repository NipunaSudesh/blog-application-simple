import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-blue-200 px-10">
      <h1 className="font-bold tracking-wide text-4xl">Blog Application</h1>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};
