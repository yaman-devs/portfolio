"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [mouseX, setMouseX] = useState("");
  useEffect(() => {
    document.addEventListener("touchmove", (e) => {
      setMouseX(
        () =>
          ((e.touches[0].clientX / document.documentElement.clientWidth) * 100)
            .toFixed()
            .toString() + "%"
      );
    });
    document.addEventListener("mousemove", (e) => {
      setMouseX(
        () =>
          ((e.clientX / document.documentElement.clientWidth) * 100)
            .toFixed()
            .toString() + "%"
      );
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center h-96">
      <div
        className="absolute -z-10 w-full text-center h-[1px] top-[10%] "
        style={{
          background: `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(225,191,157,1) ${mouseX}, rgba(0,212,255,0.00043767507002800965) 100%)`,
        }}
      ></div>
      <div className=" bg-background text-4xl p-4 ">About</div>
      <div className="grid grid-cols-2">
        <p className="py-8 lg:py-16 px-4 lg:px-8 text-center">
          I'm a front-end developer student studied in Anadolu University. My
          journey has been all about translating creative visions into
          captivating digital experiences. Proficient in HTML, CSS, and
          JavaScript, I'm dedicated to crafting seamless user interfaces with a
          flair for responsive design. My enthusiasm for learning drives me to
          stay updated with the latest trends in web development. Let's create
          immersive web experiences together!
        </p>
        <div className="text-center font-bold text-xl">
          Skills<div></div>
        </div>
      </div>
    </div>
  );
}
