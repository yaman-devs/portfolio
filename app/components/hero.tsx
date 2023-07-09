"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import LocalFont from "next/font/local";

const font = LocalFont({
  src: [
    {
      path: "../../public/fonts/Oxanium-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Oxanium-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Oxanium-Light.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function Hero() {
  const hero = ["YAMAN", "NAYAL", "WEB", "DEVELOPER"];
  useEffect(() => {
    const heroSpans = document.querySelectorAll(".title");
    gsap.fromTo(
      heroSpans,
      { scaleY: 0, opacity: 0 },
      {
        scaleY: 1,
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
        transformOrigin: "bottom",
        ease: "power2",
      }
    );
  }, []);

  return (
    <section className="hero !overflow-hidden  ">
      <h1 className={font.className + " hero__main"}>
        <div className="hero__title">
          {hero.map((item, i) => (
            <span className="title__wrapper" key={i}>
              {" "}
              <span className={"title leading-none"}>{item}</span>
            </span>
          ))}
        </div>
      </h1>
    </section>
  );
}
