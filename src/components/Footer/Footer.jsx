import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <main className="flex items-center justify-center bg-[#212121] px-20 flex-col pt-16">
      <div className="w-full flex items-start justify-around pb-5 flex-wrap flex-col sm:flex-row">
        <div className="flex flex-col gap-2 py-2 ">
          <h3 className="text-2xl text-white">Company</h3>
          <Link
            className="hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            About
          </Link>
          <Link
            className="hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Blog
          </Link>
          <Link
            className="hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Join Us
          </Link>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h3 className="text-2xl text-white">Services</h3>
          <Link
            className=" hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Premium Account
          </Link>
          <Link
            className=" hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Mobile App
          </Link>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <h3 className="text-2xl text-white">Support</h3>
          <Link
            className="hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Pricing Plan
          </Link>
          <Link
            className="hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Documentation
          </Link>
          <Link
            className="hover:text-blue-400 transition text-[16px] font-light text-white"
            to="/"
          >
            Tutorial
          </Link>
        </div>
      </div>
      <div className="border-t-[1px] w-full border-white flex justify-between items-center py-5 flex-wrap gap-5">
        <p className="text-white font-light text-[14px]">
          Design with © 2025 right reserved
        </p>
        <div className="flex gap-2 items-center justify-center sm:justify-end  flex-1">
          <i class="hover:text-blue-400 transition cursor-pointer text-white fa-brands fa-facebook-f"></i>
          <i class="hover:text-blue-400 transition cursor-pointer text-white fa-brands fa-instagram"></i>
          <i class="hover:text-blue-400 transition cursor-pointer text-white fa-brands fa-spotify"></i>
          <i class="hover:text-blue-400 transition cursor-pointer text-white fa-brands fa-youtube"></i>
        </div>
      </div>
    </main>
  );
}

export default Footer;
