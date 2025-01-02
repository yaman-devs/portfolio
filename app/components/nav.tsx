"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import classNames from "classnames";

export default function Nav() {
  const [currentLang, setCurrentLang] = useState({
    lang: localStorage.getItem("lang") || "EN",
    icon: localStorage.getItem("icon") || "icons/en.svg",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const Langs = [
    { lang: "EN", icon: "icons/en.svg" },
    { lang: "AR", icon: "icons/ar.svg" },
    { lang: "TR", icon: "icons/tr.svg" },
  ];

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.fromTo(
      "#mobileNav",
      {
        opacity: 0,
        left: "-100%",
      },
      {
        opacity: 1,
        left: 0,
        duration: 0.5,
        ease: "power1.inOut",
      }
    ).reverse();
  });

  return (
    <nav
      className="fixed z-30 flex justify-between items-center  py-2 lg:py-4 px-8 sm:px-16 xl:px-32 2xl:px-64 bg-slate-950/70 text-slate-400 w-full
    "
    >
      <div className="max-sm:hidden flex space-x-4 text-2xl ">
        <Link href="#home" className="hover:text-white">
          Home
        </Link>
        <Link href="#Skills" className="hover:text-white">
          Skills
        </Link>
        <Link href="#Projects" className="hover:text-white">
          Projects
        </Link>
        <Link href="#Education" className="hover:text-white">
          Education
        </Link>
        <Link href="#Contact" className="hover:text-white">
          Contact
        </Link>
      </div>
      {/* Mobile Nav */}
      <div className="hidden max-sm:flex items-center">
        <button
          className="hover:text-white"
          onClick={() => {
            tl.play();
          }}
        >
          <GiHamburgerMenu className="text-5xl" />
        </button>
        <div
          id="mobileNav"
          className="absolute top-0 left-0 justify-evenly w-5/6 h-screen  bg-slate-950 flex flex-col px-8 py-32 text-5xl z-20"
        >
          <button
            className="hover:text-white absolute top-3 left-8"
            onClick={() => {
              tl.reverse();
            }}
          >
            <RxCross2 className="text-5xl" />
          </button>
          <Link
            href="#home"
            onClick={() => tl.reverse()}
            className="hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#Skills"
            onClick={() => tl.reverse()}
            className="hover:text-white"
          >
            Skills
          </Link>
          <Link
            href="#Projects"
            onClick={() => tl.reverse()}
            className="hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="#Education"
            onClick={() => tl.reverse()}
            className="hover:text-white"
          >
            Education
          </Link>
          <Link
            href="#Contact"
            onClick={() => tl.reverse()}
            className="hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
