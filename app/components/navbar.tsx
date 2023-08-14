"use client";
import Link from "next/link";
import LocalFont from "next/font/local";
import { AnimationSequence, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
const logoFont = LocalFont({
  src: "../../public/fonts/agdasima-regular.woff2",
});

export default function Navbar() {
  let logoW: number;
  let sequence: AnimationSequence;
  let reverseSequence: AnimationSequence;
  const [scope, animate] = useAnimate();
  let logo = ["Y", "AMAN ", "D", "EVS"];

  useEffect(() => {
    screen.width < 768 ? (logoW = 55) : (logoW = 70);

    sequence = [
      ["span.logo-0", { display: ["inline-block", "inline-block"] }],
      [
        "span.logo-1",
        {
          display: ["none", "inline-block"],
          opacity: [0, 1],
          position: "absolute",
        },
        {
          at: 0,
        },
      ],
      ["span.logo-2", { display: "inline-block", x: [0, logoW] }, { at: 0 }],
      [
        "span.logo-3",
        { display: ["none", "inline-block"], opacity: [0, 1], x: logoW },
        { at: 0 },
      ],
    ];

    reverseSequence = [
      [
        "span.logo-3",
        {
          display: ["inline-block", "none"],
          opacity: [1, 0],
          x: logoW,
        },
        {
          at: 0,
        },
      ],
      ["span.logo-2", { display: "inline-block", x: [logoW, 0] }, { at: 0 }],
      [
        "span.logo-1",
        {
          display: ["none", "inline-block"],
          opacity: [1, 0],
          position: "absolute",
        },
        {
          at: 0,
        },
      ],
      [
        "span.logo-0",
        { display: ["inline-block", "inline-block"] },
        {
          at: 0,
        },
      ],
    ];
    animate(sequence).pause();
  }, []);

  return (
    <nav className="fixed w-screen z-50">
      <div className="flex justify-between items-start px-4 2xl:px-80  [&>*]:text-xl  py-5 lg:py-7">
        <Link href={"/"}>
          <div
            ref={scope}
            id="logo"
            onMouseEnter={() => {
              animate(sequence);
            }}
            onMouseLeave={() => {
              animate(reverseSequence);
            }}
            className={logoFont.className + " min-w-[100px]"}
          >
            {logo.map((i, index) => (
              <span
                className={"hidden text-3xl md:text-4xl logo-" + index}
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
