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
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
    tl.fromTo(
      "#about",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
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
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  }),
    {};

  useGSAP(() => {
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
          start: "top 70%",
        },
      }
    );

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      "#Projects",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#Projects",
          start: "top center",
          onEnter: () => tl.play(),
        },
      }
    );
    tl.fromTo(
      "#projectsList>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.3,
      }
    );
  }, {});

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      "#Education",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#Education",
          start: "top 70%",
          onEnter: () => tl.play(),
        },
      }
    );
    tl.fromTo(
      "#educationList>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.3,
      }
    );
    tl.fromTo(
      "#Contact",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
    tl.fromTo(
      "#contactList>* ",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: 0.3,
      }
    );
  }, {});

  return (
    <>
      <div
        id="home"
        className="flex flex-col items-center justify-center    gap-8 md:gap-16 px-8 sm:px-16 xl:px-32 2xl:px-64 "
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
