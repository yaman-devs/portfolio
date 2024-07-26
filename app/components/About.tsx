"use client";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import Break from "./break";
import Image from "next/image";
import html5 from "@/public/images/html5-original.svg";
import css3 from "@/public/images/css3-original.svg";
import javascript from "@/public/images/javascript-original.svg";
import typescript from "@/public/images/typescript-original.svg";
import react from "@/public/images/react-original-wordmark.svg";
import nextjs from "@/public/images/nextjs-original-wordmark.svg";
import tailwindcss from "@/public/images/tailwindcss-original.svg";
import nodejs from "@/public/images/nodejs-original-wordmark.svg";
import git from "@/public/images/git-plain-wordmark.svg";
import firebase from "@/public/images/firebase-original-wordmark.svg";

export default function About() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-50%" });

  const Icon = tw.li`
    bg-secondary
    p-2
    rounded-xl
    2xl:w-32
    2xl:h-32
    xl:w-32
    xl:h-32
    md:w-28
    md:h-28
    w-16
    h-16
  
  
  `;

  useEffect(() => {
    isInView &&
      animate(
        "p ,p+ div ",
        { opacity: [0, 1] },
        { duration: 1.5, delay: stagger(0.6) }
      );

    isInView &&
      animate(
        "ul",
        { x: ["0%", "-100%"] },
        {
          duration: 10,
          ease: "linear",
          repeatType: "loop",
          repeat: Infinity,
        }
      );
  }, [[scope.current]]);

  return (
    <div className="relative flex flex-col  w-screen items-center">
      <Break section="About" />
      <div
        ref={scope}
        className="flex flex-col items-center h-full gap-24  py-8  "
      >
        <p className="py-8 xl:py-16 px-4 md:px-28 xl:px-48 2xl:max-w-7xl opacity-0   text-2xl xl:text-4xl  ">
          My journey has been all about translating creative visions into
          captivating digital experiences. Proficient in HTML, CSS, and
          JavaScript, I'm dedicated to crafting seamless user interfaces with a
          flair for responsive design. My enthusiasm for learning drives me to
          stay updated with the latest trends in web development. Let's create
          immersive web experiences together!
        </p>
        <div className="flex mt-auto w-screen opacity-0 mb-16 ">
          <ul className="flex flex-col">
            <div className="grid grid-cols-5 max-w-min gap-[8rem] md:gap-[14rem] xl:gap-[16rem]   ">
              <Icon>
                <Image alt="html5" src={html5} />
              </Icon>
              <Icon>
                <Image alt="css3" src={css3} />
              </Icon>
              <Icon>
                <Image alt="javascript" src={javascript} />
              </Icon>
              <Icon>
                <Image alt="typescript" src={typescript} />
              </Icon>
              <Icon>
                <Image alt="nodejs" src={nodejs} />
              </Icon>
            </div>
            <div className="grid grid-cols-6 max-w-min gap-[8rem] md:gap-[14rem] xl:gap-[16rem]  justify-items-end  ">
              <div></div>
              <Icon>
                <Image alt="react" src={react} />
              </Icon>
              <Icon>
                <Image alt="nextjs" src={nextjs} />
              </Icon>
              <Icon>
                <Image alt="tailwindcss" src={tailwindcss} />
              </Icon>
              <Icon>
                <Image alt="git" src={git} />
              </Icon>
              <Icon>
                <Image alt="firebase" src={firebase} />
              </Icon>
            </div>
          </ul>

          <ul className=" flex flex-col">
            <div className="grid grid-cols-5 max-w-min  gap-[8rem] md:gap-[14rem] xl:gap-[16rem] ">
              <Icon>
                <Image alt="html5" src={html5} />
              </Icon>
              <Icon>
                <Image alt="css3" src={css3} />
              </Icon>
              <Icon>
                <Image alt="javascript" src={javascript} />
              </Icon>
              <Icon>
                <Image alt="typescript" src={typescript} />
              </Icon>
              <Icon>
                <Image alt="nodejs" src={nodejs} />
              </Icon>
            </div>
            <div className="grid grid-cols-6 max-w-min gap-[8rem] md:gap-[14rem] xl:gap-[16rem]  justify-items-end  ">
              <div></div>
              <Icon>
                <Image alt="react" src={react} />
              </Icon>
              <Icon>
                <Image alt="nextjs" src={nextjs} />
              </Icon>
              <Icon>
                <Image alt="tailwindcss" src={tailwindcss} />
              </Icon>
              <Icon>
                <Image alt="git" src={git} />
              </Icon>
              <Icon>
                <Image alt="firebase" src={firebase} />
              </Icon>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
