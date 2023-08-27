"use client";
import { useAnimate, stagger } from "framer-motion";
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
  const [scope, animate] = useAnimate();
  const hero = ["YAMAN", "NAYAL", "WEB", "DEVELOPER"];
  // const screenH = window.screen.height * 0.7;
  useEffect(() => {
    const heroSpans = document.querySelectorAll(".title");
    animate(heroSpans, { scaleY: [0, 1], opacity: 1 }, { delay: stagger(0.2) });
  }, []);

  return (
    <section
      className="hero !overflow-hidden "
      // style={{ height: screenH }}
    >
      <h1 className={font.className + " hero__main"}>
        <div className="hero__title">
          {hero.map((item, i) => (
            <span ref={scope} className="title__wrapper" key={i}>
              {" "}
              <span className={"title leading-none"}>{item}</span>
            </span>
          ))}
        </div>
      </h1>
    </section>
  );
}
