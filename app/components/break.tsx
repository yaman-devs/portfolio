import { useEffect, useState } from "react";

export default function Break({ section }: { section: string }) {
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
        className="absolute -z-10 w-full h-[1px] md:top-7 top-5"
        style={{
          background: `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(225,191,157,1) ${mouseX}, rgba(0,212,255,0.00043767507002800965) 100%)`,
        }}
      ></div>
      <div className=" bg-slate-950 md:text-6xl text-2xl px-4">{section}</div>
    </>
  );
}
