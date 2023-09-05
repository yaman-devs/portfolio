"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./project-card";
import img from "@/public/images/LittleMissStyle.png";

export default function Projects() {
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
    <div className="relative flex flex-col  items-center mb-8">
      <div
        className="absolute -z-10 w-full h-[1px] top-5"
        style={{
          background: `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(225,191,157,1) ${mouseX}, rgba(0,212,255,0.00043767507002800965) 100%)`,
        }}
      ></div>
      <div className=" bg-background text-4xl px-4 mb-4">Projects</div>
      <div className="flex flex-col  px-8 xl:px-72 py-8 w-full gap-8 xl:gap-0">
        {" "}
        <ProjectCard
          title="Little Miss Style"
          description="Girls dresses clothing brand based in Turkey. Feel free to look around; perhaps you will find something of interest to your daughter."
          tags={["Nextjs", "WixAPI", "Tailwind"]}
          image={img.src}
          url="https://littlemissstyle.com"
        />
      </div>
    </div>
  );
}
