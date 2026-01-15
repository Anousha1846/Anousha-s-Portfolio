"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MyNav = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <main >
      <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 ">
        <div className="flex items-center justify-between h-16  ">
        <div className="flex items-center">
              <div className="flex-shrink-0 lg:text-4xl text-2xl  ">
                <Link href="/" className="text-sky-700 italic font-mono font-extrabold">
                  <Popover>
                    <PopoverTrigger>  Anousha</PopoverTrigger>
                    <PopoverContent>
                    A passionate web developer skilled in building modern, user-friendly websites and applications.
                    </PopoverContent>
                  </Popover>
                </Link>
              </div>
            </div>
            <div className="hidden md:block ">
              <div className=" ml-4 flex items-center font-semibold text-base space-x-4">
                <Link
                  href="/"
                  className="text-slate-600 text-lg hover:bg-slate-300 hover:text-sky-700 
                        rounded-lg  p-2  "
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-slate-600 text-lg hover:bg-slate-300 hover:text-sky-700 rounded-lg p-2 "
                >
                  About
                </Link>
                <Link
                  href="/myProjects"
                  className="text-slate-600 text-lg hover:bg-slate-300 hover:text-sky-700 rounded-lg  p-2"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-600 text-lg hover:bg-slate-300 hover:text-sky-700 rounded-lg p-2 "
                >
                  Contact
                </Link>
              </div>
            </div>
          
          <div className="md:hidden flex  items-end justify-end mx-4 px-2 text-lg font-extrabold">
            <button
              className=" p-2 rounded-md text-black hover:text-black mb-1  outline-double outline-sky-800  bg-white"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg
                  className="block h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          </div>
        </div>

        {isClick && (
          <div className="md:hidden text-center ">
            <div className="px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-3 ">
              <Link
                href="/"
                className=" hover:text-sky-600 mx-auto text-xl text-slate-600 block  hover:bg-slate-300
                        rounded-lg p-2  "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-sky-600 mx-auto  text-xl text-slate-600 block  rounded-lg p-2 hover:bg-slate-300 "
              >
                About
              </Link>
              <Link
                href="/myProjects"
                className="hover:text-sky-600 text-xl  text-slate-600 block rounded-lg p-2 hover:bg-slate-300"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="hover:text-sky-600  text-xl text-slate-600 block rounded-lg p-2 hover:bg-slate-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </main>
  );
};

export default MyNav;