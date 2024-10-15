import Image from "next/image";
import { NavBar  } from "@/app/components/NavBar";
import { BlogCard  } from "@/app/components/BlogCard";
import { Body } from "@/app/components/Body";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 items-center">
        <NavBar  />
        <Body />
      </main> 
    
  );
}
