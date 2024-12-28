"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCode } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import background from "@/public/background.webp";
import Link from "next/link";

export default function Hero() {
  const [isCode, setIsCode] = useState(true);
  const [time, setTime] = useState<string>("");
  const [myTime, setMyTime] = useState<string>("");

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to("#icon", {
      rotate: 360,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
    tl.to("#icon", {
      delay: 2,
      rotate: 720,
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
      onComplete: () => setIsCode(!isCode),
    });
  }, [isCode]);

  useEffect(() => {
    const getClientTime = (): string => {
      const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get client's time zone
      const clientDate = new Date().toLocaleTimeString("en-US", {
        timeZone: clientTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      return clientDate;
    };

    const getMyTime = (): string => {
      const myTimeZone = "Europe/Istanbul"; // Set Istanbul's time zone
      const myDate = new Date().toLocaleTimeString("en-US", {
        timeZone: myTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      return myDate;
    };

    const updateTime = () => {
      setTime(getClientTime());
      setMyTime(getMyTime());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className=" flex flex-col gap-8  items-center justify-center px-96 py-48 ">
      <Image
        src={background}
        loading="eager"
        quality={100}
        className="w-full -z-10 opacity-40"
        fill
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 -z-10 "></div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-8xl font-bold ">
          Yaman Nayal
          <span className="ml-8 absolute">
            {isCode ? (
              <FaCode
                id="icon"
                className="inline h-full w-24   text-amber-400 opacity-0"
              />
            ) : (
              <BiCodeCurly
                id="icon"
                className="inline h-full w-24 text-amber-400 opacity-0"
              />
            )}
          </span>
        </h1>
        <p className="text-5xl text-gray-400 ">Full Stack Developer</p>
        <p className="text-3xl text-gray-500">
          <FaMapMarkerAlt className="inline" /> Bursa, Turkey
        </p>
        <div className="flex flex-col gap-4  border-y border-amber-400 p-4 text-3xl text-gray-400 ">
          <p>
            <span className="text-amber-400">Your Time:</span> {time}
          </p>
          <p>
            <span className="text-amber-400">My Time:</span> {myTime}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          window.open("/YamanNayalCV.pdf", "_blank");
        }}
        className="bg-transparent border border-amber-400  px-4 py-2  rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90 "
      >
        Download CV (PDF)
      </button>

      <div className="flex gap-4">
        <Link target="_blank" href="mailto:yamansdev@gmail.com">
          <Image
            src="icons/email.svg"
            width={50}
            height={50}
            alt="email"
            className="cursor-pointer border border-amber-400 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90"
          />
        </Link>
        <Link target="_blank" href="https://github.com/yamansdev">
          <Image
            src="icons/github.svg"
            width={50}
            height={50}
            alt="github"
            className="cursor-pointer border border-amber-400 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90"
          />
        </Link>
        <Link
          className=""
          target="_blank"
          href="https://www.linkedin.com/in/yaman-nayal/"
        >
          <Image
            src="icons/linkedin.svg"
            width={50}
            height={50}
            alt="linkedin"
            className="cursor-pointer border border-amber-400 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90"
          />
        </Link>
        <Link target="_blank" href="https://twitter.com/yamansdev">
          <Image
            src="icons/twitter.svg"
            width={50}
            height={50}
            alt="twitter"
            className="cursor-pointer p-2 border border-amber-400 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90 "
          />
        </Link>
      </div>
    </div>
  );
}
