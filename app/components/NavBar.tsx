import React from "react";
import { CgProfile } from "react-icons/cg";


export const NavBar = () => {
  return (
    <nav className="w-full p-3 flex justify-between items-center bg-blue-200 px-10">
      <h1 className="font-bold tracking-wide text-5xl ">Blog Application</h1>
      <CgProfile size={30} color="black" />
    </nav>
  );
};
