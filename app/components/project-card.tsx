import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useInView, useAnimate } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  url,
}: {
  title: string;
  description: string;
  tags: Array<string>;
  image: string;
  url: string;
}) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-50%" });

  const order =
    scope.current?.parentElement?.children[0] == scope.current
      ? false
      : (Array.prototype.indexOf.call(
          scope.current?.parentNode?.children,
          scope.current
        ) &
          2) ==
        0;
  console.log(order);

  useEffect(() => {
    isInView &&
      animate(
        scope.current,
        { opacity: [0, 1], x: [`${order ? "-100%" : "100%"}`, "0%"] },
        { duration: 1.5 }
      );
  }, [[scope.current]]);

  return (
    <>
      <Link href={url} ref={scope} className="opacity-0 max-w-4xl">
        <div className="hidden border-[1px] border-white/30 bg-secondary rounded-xl lg:flex flex-col ">
          <Image
            className="aspect-video  "
            src={image}
            alt="Project Image"
            width={1600}
            height={900}
          />
          <div className="grid grid-cols-2 p-8 ">
            <div className="flex flex-col ">
              <h1 className="text-7xl mb-14">{title}</h1>
              <ul className="flex flex-wrap mt-auto gap-2 text-base ">
                {tags.map((item: string, index: number) => (
                  <li className="rounded-full px-2 bg-gray-500" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="p-2 text-slate-400">{description}</p>
          </div>
        </div>
        <div className="lg:hidden bg-secondary ">
          <Image
            src={image}
            alt="Project Image"
            width={1600}
            height={900}
            className="aspect-video"
          />
          <div className="flex flex-col md:gap-4 gap-2 p-4">
            <h1 className="text-2xl md:text-3xl">{title}</h1>
            <p className="text-slate-300 text-lg md:text-xl">{description}</p>
            <ul className="flex flex-wrap mt-8 gap-2 text-base ">
              {tags.map((item: string, index: number) => (
                <li className="rounded-full px-2 bg-gray-500" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
}
