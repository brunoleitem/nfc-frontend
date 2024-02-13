"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import CheckSVG from "../assets/check";
import Link from "next/link";

export function Header() {
  return (
    <div
      style={{ backgroundColor: "rgba(32, 39, 32, 0.5)" }}
      className="w-full items-center justify-center flex py-4  backdrop-blur-md  sticky z-10 top-0 "
    >
      <div className="w-4/5 py-2 bg-theme-light text-theme-dark rounded-full px-6  flex flex-row items-center justify-between">
        <div className="bg-theme-lemon py-4 px-4 rounded-3xl cursor-pointer">
          <HamburgerMenuIcon className="w-6 h-6" />
        </div>
        <div className="flex flex-row items-center gap-1">
          <CheckSVG />
          <h1 className="font-bold">Check.me</h1>
        </div>
        <Link href={"/signin"}>
          <div className="bg-theme-lemon py-4 px-4 rounded-3xl cursor-pointer">
            <h1 className="font-bold">Login</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
