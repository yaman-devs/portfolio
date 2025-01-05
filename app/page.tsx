"use client";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Spacer from "./components/spacer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#hero",
      {
        y: 100,
        bottom: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
      }
    );

    tl.fromTo(
      "#Skills",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#skillset>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#skillset",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      "#Projects",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#Projects",
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      "#projectsList>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#Projects",
          start: "top bottom",
        },
      }
    );

    gsap.fromTo(
      "#Education",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#Education",
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      "#educationList>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#Education",
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      "#Contact",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#Contact",
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      "#contactList>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#Contact",
          start: "top bottom",
        },
      }
    );
  });

  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center    gap-8 md:gap-16 "
      >
        <Hero />
        <Spacer section="Skills" />
        <Skills />
        <Spacer section="Projects" />
        <Projects />
        <Spacer section="Education" />
        <Education />
        <Spacer section="Contact" />
        <Contact />
      </div>
    </>
  );
}
