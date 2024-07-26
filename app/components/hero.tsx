"use client";
import { stagger, useAnimate, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import LocalFont from "next/font/local";
import { FaCode } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";
import { useLenis } from "lenis/react";

export default function Hero() {
  const [scope, animate] = useAnimate();
  const [isCode, setIsCode] = useState(false);
  const scaleScope = useRef(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scaleScope,
    offset: ["start end", "end end"],
  });

  const scale = useMotionValue(0);
  useLenis(() => {
    scale.set(scrollYProgress.get() + 1 * 2);
  });

  useEffect(() => {
    animate(
      "div",
      { opacity: [0, 1], y: [100, 0], x: [100, 0] },
      { duration: 1.5, delay: stagger(0.3) }
    );
  }, [scope.current]);

  useEffect(() => {
    const animation = async () => {
      await animate(
        "#icon",
        { opacity: [0, 1], rotateZ: [0, 180] },
        { duration: 1.5 }
      );
      await animate(
        "#icon",
        { opacity: [1, 0], rotateZ: [180, 360] },
        { duration: 1.5, delay: 3 }
      );

      setIsCode(!isCode);
    };

    animation();
  }, [isCode]);

  return (
    <div
      ref={ref}
      className="w-screen h-[95vh] flex flex-col justify-center items-center 2xl:px-80"
    >
      <div
        ref={scope}
        className="2xl:text-9xl lg:text-9xl tracking-widest  md:text-8xl text-5xl leading-none text-amber-50 font-bold  "
      >
        <div className="opacity-0">Yaman</div>
        <div className="opacity-0">Nayal</div>
        <div className="opacity-0">Web</div>
        <div className="inline-block md:mr-8 mr-4 opacity-0">Developer. </div>
        <div className="inline-block opacity-0  ">
          {isCode ? (
            <FaCode id="icon" className="inline h-full text-orange-400" />
          ) : (
            <BiCodeCurly id="icon" className="inline  text-orange-400" />
          )}
        </div>
      </div>
    </div>
  );
}
