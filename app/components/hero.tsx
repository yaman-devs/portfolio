"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaCode } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import background from "@/public/background.webp";
import Link from "next/link";

function Icon({
  image,
  alt,
  href,
}: {
  image: string;
  alt: string;
  href: string;
}) {
  return (
    <Link target="_blank" href={href}>
      <Image
        src={image}
        width={50}
        height={50}
        alt={alt}
        className="cursor-pointer max-lg:w-[35px] border border-amber-400 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90"
      />
    </Link>
  );
}
const socials = [
  {
    image: "/icons/email.svg",
    alt: "email",
    href: "mailto:yamansdev@gmail.com",
  },
  {
    image: "/icons/github.svg",
    alt: "github",
    href: "https://github.com/yamansdev",
  },
  {
    image: "/icons/linkedin.svg",
    alt: "linkedin",
    href: "https://www.linkedin.com/in/yaman-nayal/",
  },
  {
    image: "/icons/twitter.svg",
    alt: "twitter",
    href: "https://www.x.com/yamansdev/",
  },
];

export default function Hero(ref: any) {
  const [isCode, setIsCode] = useState(true);
  const [myTime, setMyTime] = useState<string>("");

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

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
    const getMyTime = (): string => {
      const myTimeZone = "Europe/Istanbul";
      const myDate = new Date().toLocaleTimeString("en-US", {
        timeZone: myTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      return myDate;
    };
    const updateTime = () => {
      setMyTime(getMyTime());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className=" grid sm:grid-cols-2 items-center  justify-center sm:justify-end gap-12 sm:gap-16 md:gap-32 xl:gap-48 pt-56 ">
      <Image
        src={background}
        priority
        loading="eager"
        quality={100}
        className="w-full -z-50 opacity-40"
        fill
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 -z-40 "></div>
      <div
        id="hero"
        className="opacity-0 flex flex-col max:justify-center max-sm:items-center w-full gap-4 md:gap-6 lg:gap-8  "
      >
        <div className="flex flex-col  lg:gap-1 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">
            Yaman Nayal
            <span className="xl:ml-4 ml-2 sm:absolute  max-sm:hidden">
              {isCode ? (
                <FaCode
                  id="icon"
                  className="inline h-full lg:w-12 xl:w-16   text-amber-400 opacity-0"
                />
              ) : (
                <BiCodeCurly
                  id="icon"
                  className="inline h-full lg:w-12 xl:w-16 text-amber-400 opacity-0"
                />
              )}
            </span>
          </h1>
          <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400 ">
            Full Stack Developer
          </p>
          <p className="sm:text-lg md:text-xl lg:text-2xl text-gray-500">
            <FaMapMarkerAlt className="inline" /> Bursa, Turkey
          </p>
        </div>
        <p className="border-y border-amber-400 py-2 lg:py-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-amber-400 ">
          My current Time: <span className="text-gray-400">{myTime}</span>
        </p>

        <div className="flex flex-col max-sm:items-center max-sm:justify-center gap-4">
          <button
            onClick={() => {
              window.open("/YamanNayalCV.pdf", "_blank");
            }}
            className="bg-transparent border border-amber-400  px-4 py-2 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)] hover:-translate-y-1 active:scale-90 max-w-fit  max-lg:text-sm "
          >
            Download CV (PDF)
          </button>

          <div className="flex gap-4">
            {socials.map((social, index) => (
              <Icon
                key={index}
                image={social.image}
                alt={social.alt}
                href={social.href}
              />
            ))}
          </div>
        </div>
      </div>
      <p
        id="about"
        className="opacity-0 text-base sm:text-lg  md:text-2xl lg:text-3xl xl:text-4xl text-balance text-left max-sm:text-center   "
      >
        I am a <span className="text-amber-400">web developer</span> with
        experience in building responsive and functional websites. I focus on
        creating clean, efficient code to deliver practical solutions that meet
        user and business needs.
      </p>
    </div>
  );
}
