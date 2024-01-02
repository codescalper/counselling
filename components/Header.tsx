"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const router = useRouter();
  const { setTheme } = useTheme();

  return (
    <div
      className={`flex justify-between m-4 sticky top-4 backdrop-blur-md bg-opacity-50 sm:pb-3 md:pb-4 xl:pb-5 dark:bg-opacity-50 z-50`}
    >
      <ScrollLink
        to="top"
        smooth={true}
        duration={1500}
        spy={true} // enable the active class for the target element
        offset={-50} // adjust the offset if needed, considering your sticky header
      >
        <Link legacyBehavior href="/" onClick={() => router.push("/")}>
          <div className="text-xl font-bold sm:text-2xl xl:text-3xl cursor-pointer">
            MHT-CET Counselling
          </div>
        </Link>
      </ScrollLink>
      <div className="flex items-center cursor-pointer  ">
        <Link href="/" legacyBehavior onClick={() => router.push("/")}>
          <a className={`mx-2`}>About Us</a>
        </Link>
        <ScrollLink
          to="testimonials"
          smooth={true}
          duration={1500}
          spy={true} // enable the active class for the target element
          offset={-50} // adjust the offset if needed, considering your sticky header
        >
          <Link
            href="#testimonials"
            legacyBehavior
            onClick={() => router.push("#testimonials")}
          >
            <a className={`mx-2 `}>Testimonials</a>
          </Link>
        </ScrollLink>
        <ScrollLink
          to="pricing"
          smooth={true}
          duration={1000}
          spy={true} // enable the active class for the target element
          offset={-50} // adjust the offset if needed, considering your sticky header
        >
          <Link
            href="/#pricing"
            legacyBehavior
            onClick={() => router.push("/#pricing")}
          >
            <a className={`mx-2 `}>Pricing</a>
          </Link>
        </ScrollLink>
        <ScrollLink
          to="youtube"
          smooth={true}
          duration={1500}
          spy={true} // enable the active class for the target element
          offset={-50} // adjust the offset if needed, considering your sticky header
        >
          <Link
            href="/#youtube"
            legacyBehavior
            onClick={() => router.push("/#youtube")}
          >
            <a className={`mx-2 `}>Youtube</a>
          </Link>
        </ScrollLink>
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
      </div>
    </div>
  );
}
