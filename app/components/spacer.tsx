"use client";
import { useEffect, useState } from "react";

export default function Spacer({ section }: { section: string }) {
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
    <>
      <div
        id={section}
        className="opacity-0 relative flex justify-center w-full text-center"
      >
        <h1
          className="font-bold sm:text-2xl md:text-3xl
        lg:text-4xl xl:text-5xl bg-slate-950 px-2 "
        >
          {section}
        </h1>
        <div
          className="absolute w-full h-[1px] bottom-[50%] -z-10  "
          style={{
            background: `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(225,191,157,1) ${mouseX}, rgba(0,212,255,0.00043767507002800965) 100%)`,
          }}
        ></div>
      </div>
    </>
  );
}
