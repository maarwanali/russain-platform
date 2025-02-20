"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Vidoes {
  id: number;
  title: string;
  description: string;
  url: string;
}

const course: Vidoes[] = [
  {
    id: 1,
    title: "vidoe name (1)",
    description: "some discription",
    url: "https://youtu.be/eFKVIKsbAo0",
  },
  {
    id: 2,
    title: "vidoe name (2)",
    description: "some discription",
    url: "https://youtu.be/gmHTJOu1JLI",
  },
  {
    id: 2,
    title: "vidoe name (3)",
    description: "some discription",
    url: "https://youtu.be/gmHTJOu1JLI",
  },
  {
    id: 2,
    title: "vidoe name (4)",
    description: "some discription",
    url: "https://youtu.be/gmHTJOu1JLI",
  },
  {
    id: 2,
    title: "vidoe name (5)",
    description: "some discription",
    url: "https://youtu.be/gmHTJOu1JLI",
  },
  {
    id: 2,
    title: "vidoe name (6)",
    description: "some discription",
    url: "https://youtu.be/gmHTJOu1JLI",
  },
];
function SideBar({ courseName }: { courseName: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activedItem, setActivedItem] = useState<number | null>(null);

  return (
    <div className="relative overflow-x-hidden  w-[100%] lg:w-[25%] my-8 lg:my-0 ">
      {/* Menu Toggle Icon */}
      <button
        className={`hidden  ${
          isOpen ? "lg:hidden" : "lg:flex"
        } p-2 bg_main_400 text-white items-center absolute top-10 right-0 translate-x-[75%] z-10 hover:translate-x-0 duration-300 transition-all`}
        aria-label="Toggle menu"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mx-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <span>Course content</span>
      </button>

      <div
        className={`${
          isOpen ? "lg:translate-x-0" : "lg:translate-x-[100%]"
        } lg:w-[100%] lg:h-screen duration-300 transition-all border-l-[1px] border-l-black border-opacity-20 `}
      >
        <button
          className="hidden lg:block p-2 bg_main_400 text-white  absolute top-0 -left-0 z-10 hover:scale-110 duration-300 transition-all"
          aria-label="Toggle menu"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="capitalize text-2xl font-bold text-center underline lg:hidden">
          {courseName} Contant
        </h3>
        <ul className="flex flex-col items-start justify-center pt-2 lg:pt-10 ">
          {course?.map((video) => (
            <Link
              href={`/courses/${courseName}?videoId=${video.id}`}
              key={video.id}
              className="w-full "
            >
              <li
                className={` ${
                  activedItem == video.id && "list-item"
                } list-item relative cursor-pointer shadow-md rounded-lg p-3 transition duration-300 visited:list-item`}
                onClick={() => setActivedItem(video.id)}
              >
                {video.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
