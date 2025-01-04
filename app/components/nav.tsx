"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import Link from "next/link";

export default function Nav() {
  const [currentLang, setCurrentLang] = useState({
    lang: "EN",
    icon: "icons/en.svg",
  });
  const [isOpen, setIsOpen] = useState(false);
  const Langs = [
    { lang: "EN", icon: "icons/en.svg" },
    { lang: "AR", icon: "icons/ar.svg" },
    { lang: "TR", icon: "icons/tr.svg" },
  ];
  const anim = useRef<globalThis.gsap.core.Tween | null>(null);

  useGSAP(() => {
    anim.current = gsap
      .fromTo(
        "#mobileNav",
        {
          left: "-100%",
          opacity: 0,
        },
        {
          left: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
      .reverse();
  });

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      setCurrentLang({
        lang: lang,
        icon: `icons/${lang}.svg`,
      });
    }
  }, []);

  return (
    <nav
      className="fixed z-30 flex justify-between items-center  py-2 lg:py-4  bg-slate-950/70 text-slate-400 w-full
    "
    >
      <div className="max-sm:hidden flex space-x-4 text-2xl ">
        <Link href="#home" className="hover:text-white">
          Home
        </Link>
        <Link href={"#Skills"} className="hover:text-white">
          Skills
        </Link>
        <Link href={"#Projects"} className="hover:text-white">
          Projects
        </Link>
        <Link href={"#Education"} className="hover:text-white">
          Education
        </Link>
        <Link href={"#Contact"} className="hover:text-white">
          Contact
        </Link>
      </div>
      {/* Mobile Nav */}
      <div className="hidden max-sm:flex items-center">
        <button
          className="hover:text-white"
          onClick={() => {
            // anim.play();
            anim.current?.play();
          }}
        >
          <GiHamburgerMenu className="text-5xl" />
        </button>
        <div
          id="mobileNav"
          className="opacity-0 absolute top-0 left-0 justify-evenly w-5/6 h-screen  bg-slate-950 flex flex-col px-8 py-32 text-5xl z-20"
        >
          <button
            className="hover:text-white absolute top-3 left-8"
            onClick={() => {
              anim.current?.reverse();
            }}
          >
            <RxCross2 className="text-5xl" />
          </button>
          <Link
            href={"#home"}
            onClick={() => {
              anim.current?.reverse();
            }}
            className="hover:text-white"
          >
            Home
          </Link>
          <Link
            href={"#Skills"}
            onClick={() => {
              anim.current?.reverse();
            }}
            className="hover:text-white"
          >
            Skills
          </Link>
          <Link
            href={"#Projects"}
            onClick={() => {
              anim.current?.reverse();
            }}
            className="hover:text-white"
          >
            Projects
          </Link>
          <Link
            href={"#Education"}
            onClick={() => {
              anim.current?.reverse();
            }}
            className="hover:text-white"
          >
            Education
          </Link>
          <Link
            href={"#Contact"}
            onClick={() => {
              anim.current?.reverse();
            }}
            className="hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
