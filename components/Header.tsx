"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

export default function Navbar(this: any) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0  border-gray-200 dark:bg-gray-900 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ScrollLink
          to="top"
          smooth={true}
          duration={1500}
          spy={true}
          offset={-50}
        >
          <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
            legacyBehavior
            href="/"
            onClick={() => router.push("/")}
          >
            <div className="self-center text-2xl font-semibold whitespace-nowrap">
              MHT-CET Counselling
            </div>
          </Link>
        </ScrollLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`hidden md:block ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <ScrollLink
                to="about-us"
                smooth={true}
                duration={1500}
                spy={true}
                offset={-50}
              >
                <Link
                  href="/#about-us"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  legacyBehavior
                  onClick={() => router.push("/#about-us")}
                >
                  About Us
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={1500}
                spy={true}
                offset={-50}
              >
                <Link
                  href="#testimonials"
                  legacyBehavior
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => router.push("#testimonials")}
                >
                  Testimonials
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-50}
              >
                <Link
                  href="/#pricing"
                  legacyBehavior
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  onClick={() => router.push("/#pricing")}
                >
                  Pricing
                </Link>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="youtube"
                smooth={true}
                duration={1500}
                spy={true}
                offset={-50}
              >
                <Link
                  href="/#youtube"
                  legacyBehavior
                  onClick={() => router.push("/#youtube")}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <a className={`mx-2 `}>Youtube</a>
                </Link>
              </ScrollLink>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
