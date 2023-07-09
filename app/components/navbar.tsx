"use client";
import Link from "next/link";
import LocalFont from "next/font/local";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useState } from "react";
const logoFont = LocalFont({
  src: "../../public/fonts/agdasima-regular.woff2",
});

export default function Navbar() {
  let tween: GSAPTimeline;
  let logo = ["Y", "AMAN ", "D", "EVS"];
  tween = gsap.timeline();
  const [screenW, setSecreenW] = useState(0);

  useEffect(() => {
    const changeLogo = () => {
      setSecreenW(screen.width);
    };
    changeLogo();
    console.log(screenW);
    window.addEventListener("resize", changeLogo);
  }, []);
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    tween.pause();
    let logoW;

    screenW < 768 ? (logoW = 55) : (logoW = 70);
    tween
      .fromTo(
        "#logo-0",
        { display: "inline-block" },
        {
          opacity: 0.7,
          ease: "power4",
        }
      )
      .fromTo(
        "#logo-1",
        { display: "none", opacity: 0, position: "absolute" },
        {
          display: "inline-block",

          opacity: 0.7,
          delay: 0.1,
          ease: "power4",
        },
        0
      )
      .fromTo(
        "#logo-2",
        { display: "inline-block", x: 0 },
        { x: logoW, opacity: 0.7, ease: "power2" },
        0
      )
      .fromTo(
        "#logo-3",
        { display: "none", opacity: 0, x: logoW },
        {
          display: "inline-block",
          opacity: 0.7,
          delay: 0.1,
          ease: "power4",
        },
        0
      );
  }, [screenW]);

  return (
    <nav className="fixed w-screen z-50">
      <div className="flex justify-between items-start px-4 2xl:px-80  [&>*]:text-xl  py-5 lg:py-7">
        <Link href={"/"}>
          <div
            id="logo"
            onMouseEnter={() => tween.play()}
            onMouseLeave={() => tween.reverse()}
            className={logoFont.className + " min-w-[100px]"}
          >
            {logo.map((i, index) => (
              <span
                className="hidden text-3xl md:text-4xl"
                id={"logo-" + index}
                key={index}
              >
                {i}
              </span>
            ))}
          </div>
        </Link>
        <a
          href="#contact"
          className="hover:text-text/70 hover:border-b-2 hover:border-b-accent font-light"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
