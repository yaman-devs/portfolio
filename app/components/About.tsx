"use client";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

export default function About() {
  const Icon = tw.li`
    bg-secondary
    p-2
    rounded-xl
    xl:w-24
    md:w-20
    w-16
    h-16
    xl:h-24
    md:h-20

  
  
  `;
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
    <div className="relative flex flex-col items-center mb-8">
      <div
        className="absolute -z-10 w-full text-center h-[1px] top-[10%] "
        style={{
          background: `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(225,191,157,1) ${mouseX}, rgba(0,212,255,0.00043767507002800965) 100%)`,
        }}
      ></div>
      <div className=" bg-background text-4xl p-4 ">About</div>
      <div className="grid xl:grid-cols-2 justify-items-center py-8 px-32">
        <p className="py-8 xl:pt-4 px-4 xl:pl-24 text-xl text-center xl:text-left ">
          My journey has been all about translating creative visions into
          captivating digital experiences. Proficient in HTML, CSS, and
          JavaScript, I'm dedicated to crafting seamless user interfaces with a
          flair for responsive design. My enthusiasm for learning drives me to
          stay updated with the latest trends in web development. Let's create
          immersive web experiences together!
        </p>
        <ul className="grid grid-cols-4 w-fit gap-4 m-4">
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          </Icon>
          <Icon>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
          </Icon>
        </ul>
      </div>
    </div>
  );
}
