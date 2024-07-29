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
  srcUrl,
}: {
  title: string;
  description: string;
  tags: Array<string>;
  image: string;
  url: string;
  srcUrl: string;
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
      <div ref={scope} className="opacity-0 max-w-4xl">
        <div className="hidden border-[1px] border-white/30 bg-secondary rounded-xl lg:flex flex-col ">
          <Image
            className="aspect-video rounded-xl "
            src={image}
            alt="Project Image"
            width={1600}
            height={900}
          />
          <div className="grid grid-cols-2 px-8 pt-8 pb-4 ">
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
            <div className="flex flex-col ">
              <p className="p-2 mb-8 text-slate-400">{description}</p>
              <div className="mt-auto text-2xl self-end  ">
                <Link
                  href={url}
                  className="border-b-transparent border-b-2  hover:text-text/70 hover:border-b-2 hover:border-b-primary"
                >
                  Visit Site
                </Link>
                <Link
                  href={srcUrl}
                  className="border-b-transparent border-b-2 ml-4 hover:text-text/70 hover:border-b-2 hover:border-b-primary"
                >
                  Source Code
                </Link>
              </div>
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
              <ul className="flex flex-wrap items-center mt-8 gap-2 text-base ">
                {tags.map((item: string, index: number) => (
                  <li className="rounded-full px-2 bg-gray-500" key={index}>
                    {item}
                  </li>
                ))}
                <li className="text-2xl ml-auto  ">
                  <Link
                    href={url}
                    className="border-b-transparent border-b-2  hover:text-text/70 hover:border-b-2 hover:border-b-primary"
                  >
                    Visit Site
                  </Link>
                  <Link
                    href={srcUrl}
                    className="border-b-transparent border-b-2 ml-4 hover:text-text/70 hover:border-b-2 hover:border-b-primary"
                  >
                    Source Code
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
