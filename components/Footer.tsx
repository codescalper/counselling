"use client";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaTelegram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
export default function Footer() {
  const router = useRouter();
  const links = [
    {
      title: "About Us",
      href: "/#about-us",
    },
    {
      title: "Testimonials",
      href: "/#testimonials",
    },

    {
      title: "Pricing",
      href: "/#pricing",
    },
    {
      title: "Videos",
      href: "#youtube",
    },
    {
      title: "Contact Us",
      href: "mailto:mayankyt22@gmail.com",
    },
  ];

  return (
    <>
      <footer
        data-aos="fade-left"
        className="relative py-12 border-t-2 border-indigo-600 w-full"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-teal-600  to-yellow-600 animate-pulse"></div>
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-5 gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  className="text-center hover:text-purple-500"
                  href={link.href}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row items-center mt-2 cursor-pointer">
            <Link legacyBehavior href="/" onClick={() => router.push("/")}>
              <h2 className="text-2xl font-bold mt-5">MHT-CET Shala</h2>
            </Link>
            <div className="flex gap-4 mt-5">
              <a
                href="https://twitter.com/mayanks_tw"
                className="text-gray-500 hover:text-blue-400"
              >
                <FaTwitter size="1.5em" />
              </a>
              <a
                href="https://www.instagram.com/mayankonweb/"
                className="text-gray-500 hover:text-red-500"
              >
                <FaInstagram size="1.5em" />
              </a>
              <a
                href="https://www.linkedin.com/in/mayankonli/"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaLinkedin size="1.5em" />
              </a>
              <a href="" className="text-gray-500 hover:text-blue-400">
                <FaTelegram size="1.5em" />
              </a>
              <a href="" className="text-gray-500 hover:text-blue-800">
                <FaDiscord size="1.5em" />
              </a>
              <a
                href="https://www.youtube.com/@mhtcetshalamayanksingh"
                className="text-gray-500 hover:text-red-600"
              >
                <FaYoutube size="1.5em" />
              </a>
              <a
                href="https://github.com/codescalper"
                className="text-gray-500 hover:text-green-500"
              >
                <FaGithub size="1.5em" />
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t-1 border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} MHT-CET Shala. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
