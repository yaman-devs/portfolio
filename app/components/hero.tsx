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
];

export default function Hero() {
  const [myTime, setMyTime] = useState<string>("");

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

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
    <div className="flex items-center justify-center gap-12 sm:gap-16 md:gap-32 xl:gap-48 pt-32 sm:pt-48 ">
      {/* background image */}

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

      {/* hero content */}
      <div
        id="hero"
        className="opacity-0 flex flex-col justify-center items-center w-full gap-6 lg:gap-8  "
      >
        <div className="flex flex-col justify-center items-center lg:gap-2 ">
          <h1 className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font-bold ">
            Yaman Nayal
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-400 ">
            Full Stack Developer
          </h2>
          <h3 className="flex justify-center items-center gap-2 text-base sm:text-xl md:text-2xl  lg:text-3xl text-gray-500">
            <FaMapMarkerAlt className=" " /> Bursa, Turkey
          </h3>
        </div>

        <div className="flex flex-col max-w-3xl max-sm:items-center max-sm:justify-center gap-6 lg:gap-8">
          <div className="col-span-2  border border-slate-800 rounded-md  p-2 w-full text-center text-xs sm:text-sm lg:text-base text-gray-300 ">
            My current Time:
            <span className="text-gray-400"> {myTime}</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                window.open("/YamanNayalCV.pdf", "_blank");
              }}
              className="bg-transparent border border-amber-400  px-4 py-2 rounded-md hover:opacity-80 hover:shadow-[0_4px_8px_0_rgba(251,146,60,1)]  hover:-translate-y-1 active:scale-90 max-w-fit  text-xs md:text-sm lg:text-base "
            >
              Download CV (PDF)
            </button>

            <div className="flex justify-between gap-2 ">
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-balance text-center max-w-3xl "
        >
          I am a <span className="text-amber-400">web developer</span> with
          experience in building responsive and functional websites. I focus on
          creating clean, efficient code to deliver practical solutions that
          meet user and business needs.
        </p>
      </div>
    </div>
  );
}
