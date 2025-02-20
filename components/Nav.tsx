"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Nav() {
  const [linksOpened, setLinksOpened] = useState<boolean>(false);
  return (
    <header className="shadow_b">
      <div className="container_ flex justify-between items-center relative">
        <div className="flex_center h-[60px]">
          <span className="md:px-1 px-2 font-bold text-xl">RusFluency</span>
        </div>

        {/* menu */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 block md:hidden cursor-pointer hover:scale-105 duration-200 transition-all z-40"
          onClick={() => {
            setLinksOpened(!linksOpened);
          }}
          aria-expanded={linksOpened}
          aria-controls="nav-links"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* links */}
        <ul
          id="nav-links"
          className={`${
            linksOpened ? "left-0 " : "-left-[120%]"
          } z-50 transition-all duration-300 absolute top-[60px] bg_white_300 rounded-b-2xl  w-full px-5 md:static flex md:w-[40%] justify-between items-center flex-col md:flex-row`}
        >
          <Link href={"/"}>
            <li className="nav_link px-1 w-full text-center md:w-auto">Home</li>
          </Link>
          <Link href={"#about"}>
            <li className="nav_link px-1 w-[100%] text-center md:w-auto">
              About Us
            </li>
          </Link>

          <Link href={"#plans"}>
            <li className="nav_link px-1 w-full text-center md:w-auto">
              Plans
            </li>
          </Link>

          <Link href={"/"}>
            <li className="nav_link px-1 w-full text-center md:w-auto">
              Policy
            </li>
          </Link>
        </ul>

        {/* buttons */}
        <div className="flex gap-2">
          <Link href={"/signin"}>
            <button className="btn btn_main">Signin</button>
          </Link>

          <Link href={"/courses"}>
            <button className="btn btn_reverse">Start Learning</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav;
