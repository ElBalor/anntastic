"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className="items-center justify-center flex flex-row md:absolute md:z-10 md:m-5 md:ml-24">
      <div className="flex flex-row justify-between space-x-80 z-10 items-center">
        <div className="text-lg font-semibold text-white md:hidden block ">
          <Image
            src="/annlogo.jpg"
            width={100}
            height={100}
            alt="Logo"
            className="m-3 rounded-full w-full"
          />
        </div>
        {/* Show the hamburger menu icon only on mobile */}

        <div className="md:hidden">
          <MdMenuOpen
            className="font-bold text-5xl text-white items-end "
            onClick={handleClick}
          />
        </div>
      </div>
      <div
        className={`border-transparent bg-inherit border-x-8 bg-gradient-to-tl from-slate-900 via-blue-600 to-black rounded-md h-full w-[105rem] backdrop:blur-md md:block hidden shadow-xl ${
          toggle ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-row items-center justify-between p-1 text-white">
          <div className="text-lg font-semibold">
            <Link href="/">
              <Image
                src="/Anny.jpg"
                width={70}
                height={70}
                alt="Logo"
                className="rounded-full"
              />
            </Link>
          </div>
          <ul className="flex flex-row space-x-10 items-center justify-between cursor-pointer">
            <Link
              href="/about"
              passHref
              className="text-white text-xl hover:scale-150 duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br hover:from-slate-800 hover:via-amber-500 hover:to-blue-900"
            >
              About
            </Link>
            <Link
              href="/contact"
              passHref
              className="text-white text-xl hover:scale-125 duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-br hover:from-slate-800 hover:via-amber-500 hover:to-blue-900"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
      <div
        className={
          toggle
            ? "fixed right-0 top-0 w-[60%] sm:hidden h-[50rem] bg-slate-500 p-10 z-30 ease-in duration-500 bg-gradient-to-bl from-slate-700 to-blue-800 rounded-md"
            : "fixed right-[-100%] h-[50rem] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleClick} className="cursor-pointer">
            <AiOutlineClose
              size={40}
              className="bg-slate-600 rounded-full p-2"
            />
          </div>
        </div>
        <div className="flex-col py-4 items-center justify-end">
          <ul>
            <Link href="/">
              <li
                onClick={() => setToggle(false)}
                className="py-4 cursor-pointer text-xl font-medium"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setToggle(false)}
                className="py-4 cursor-pointer text-xl font-medium"
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setToggle(false)}
                className="py-4 cursor-pointer text-xl font-medium"
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
