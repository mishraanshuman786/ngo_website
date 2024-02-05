"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <main
      
        className="text-white bg-blue-950 font-semibold h-20">
        <div className="flex justify-between h-full">
          <div h-full>
            {toggle ? (
                <IoClose
                className="text-white text-4xl mt-5 ms-8 md:hidden"
                onClick={() => setToggle(!toggle)}
              />
              
            ) : (
                <GiHamburgerMenu
                className="text-white text-4xl mt-5 ms-8 md:hidden"
                onClick={() => setToggle(!toggle)}
              />
            )}

            <ul className="hidden ms-10 md:flex h-full">
              <li className="hover:bg-blue-950 h-full">
                <Link className="h-full" href="/">
                  <p className="ps-4 pe-4 pt-6 h-full xl:text-xl md:text-md sm:text-sm">Home</p>
                </Link>
              </li>
              <li className="hover:bg-blue-950 h-full">
                <Link className="h-full" href="/Services">
                  <p className="ps-4 pe-4 pt-6 h-full xl:text-xl ">Services</p>
                </Link>
              </li>
              <li className="hover:bg-blue-950 h-full">
                <Link className="h-full" href="/Events">
                  <p className="ps-4 pe-4 pt-6 h-full xl:text-xl md:text-md sm:text-sm">Events</p>
                </Link>
              </li>
              <li className="hover:bg-blue-950 h-full">
                <Link className="h-full" href="/Media">
                  <p className="ps-4 pe-4 pt-6 h-full xl:text-xl md:text-md sm:text-sm">Media</p>
                </Link>
              </li>
              <li className="hover:bg-blue-950 h-full">
                <Link className="h-full" href="/Career">
                  <p className="ps-4 pe-4 pt-6 h-full xl:text-xl md:text-md sm:text-sm">Career</p>
                </Link>
              </li>
              <li className="hover:bg-blue-950 h-full">
                <Link className="h-full" href="/Contact">
                  <p className="ps-4 pe-4 pt-6  h-full xl:text-xl md:text-md sm:text-sm">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
           <select className="me-10 mt-5 rounded-md p-2 text-black xl:text-xl md:text-md sm:text-sm">
               <option className="p-4">English</option>
               <option className="p-4">Hindi</option>
           </select>
          </div>
        </div>
      </main>
      {/* Responsiveness */}
      <div className={`z-50 duration-300 w-full text-white fixed ${toggle?'left-[0]':'left-[-100%]'}`}>
        <ul className="w-full md:hidden bg-blue-950">
          <li className="hover:bg-blue-950 h-full">
            <Link className="h-full" href="/">
              <p className="ps-4 pe-4 pt-6 pb-2 text-xl">Home</p>
            </Link>
          </li>
          <li className="hover:bg-blue-950 h-full">
            <Link className="h-full" href="/Services">
              <p className="ps-4 pe-4 pt-6 pb-2 text-xl">Services</p>
            </Link>
          </li>
          <li className="hover:bg-blue-950 h-full">
            <Link className="h-full" href="/Events">
              <p className="ps-4 pe-4 pt-6 pb-2 text-xl">Events</p>
            </Link>
          </li>
          <li className="hover:bg-blue-950 h-full">
            <Link className="h-full" href="/Media">
              <p className="ps-4 pe-4 pt-6 pb-2 text-xl">Media</p>
            </Link>
          </li>
          <li className="hover:bg-blue-950 h-full">
            <Link className="h-full" href="/Career">
              <p className="ps-4 pe-4 pt-6 pb-2 text-xl">Career</p>
            </Link>
          </li>
          <li className="hover:bg-blue-950 h-full">
            <Link className="h-full" href="/Contact">
              <p className="ps-4 pe-4 pt-6 pb-2 text-xl">Contact Us</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
