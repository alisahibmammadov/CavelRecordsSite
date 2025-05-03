import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main className="flex items-center justify-between bg-[#212121] opacity-90 fixed px-20 w-full py-4">
      <div className="">
        <h1 className="text-4xl text-[#f9f9f9]">
          Cavel <i>Records</i>
        </h1>
      </div>
      <div className="flex-none ">
        <Link
          className="hover:text-blue-400 transition px-2 text-white"
          to="./home"
        >
          Home
        </Link>
        <Link
          className="hover:text-blue-400 transition px-2 text-white"
          to="./contact"
        >
          Contact
        </Link>
        <Link
          className="hover:text-blue-400 transition px-2 text-white"
          to="./producers"
        >
          Producers
        </Link>
        <Link
          className="hover:text-blue-400 transition px-2 text-white"
          to="./analytics"
        >
          Analytics
        </Link>
      </div>
    </main>
  );
}

export default Navbar;
