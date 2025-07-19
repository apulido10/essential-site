"use client";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        {/* Container for nav */}
        <div className="flex justify-between items-center px-4 py-3 md:px-8 md:py-4">
          {/* Logo image left side */}
          <Image
            src="/images/essentiallogo.png"
            alt="Essential Sites"
            width={250}
            height={100}
          ></Image>
          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center  gap-10 text-gray-900 text-base md:text-lg ">
              <li className="cursor-pointer hover:text-blue-800">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-800"><Link href="/Bundles">Bundles</Link></li>
              <li className="cursor-pointer hover:text-blue-800">
                <Link href="/book">Book</Link>
              </li>{" "}
            </ul>
          </nav>
          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-900 focus:outline-none"
            aria-label="Open Menu"
          >
            <HiMenu size={28} />
          </button>
        </div>

        {/* Mobile Slide-Out Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shadow-sm">
            <span className="text-lg font-bold text-gray-900">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-900 focus:outline-none"
              aria-label="Close Menu"
            >
              <HiX size={28} />
            </button>
          </div>
          <nav>
            <ul className="flex flex-col gap-4 p-4 text-gray-900 text-lg">
              <li
                className="cursor-pointer hover:text-blue-800"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className="cursor-pointer hover:text-blue-800"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/Bundles">Bundles</Link>
              </li>
              <li
                className="cursor-pointer hover:text-blue-800"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/book">Book</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
