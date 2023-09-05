import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";

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
  const ref = useRef<HTMLDivElement>(null);
  const order =
    ref.current?.parentElement?.children[0] == ref.current
      ? false
      : (Array.prototype.indexOf.call(
          ref.current?.parentNode?.children,
          ref.current
        ) &
          2) ==
        0;

  return (
    <div ref={ref}>
      {" "}
      <div className="hidden xl:grid xl:grid-cols-10 gap-0">
        <div
          className="flex flex-col col-span-4 aspect-[4/5] gap-4 z-10 "
          style={{
            order: order ? 2 : 1,
            alignItems: order ? "flex-end" : "flex-start",
          }}
        >
          <h1 className="text-2xl">{title}</h1>
          <p className=" bg-secondary xl:w-[110%] rounded-lg p-4 text-slate-400">
            {description}
          </p>
          <ul className="flex gap-2 text-gray-500">
            {tags.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Link
          href={url}
          className="col-span-6  relative "
          style={{
            order: order ? 1 : 2,
            alignItems: order ? "flex-start" : "flex-end",
          }}
        >
          <Image
            className="aspect-video rounded-lg hover:border-[1px] hover:border-primary"
            src={image}
            alt="Project Image"
            width={1600}
            height={900}
          />
        </Link>
      </div>
      {/* mobile version */}
      <div className="flex flex-col xl:hidden gap-4">
        <div className="flex flex-col text-center col-span-4 gap-2">
          <h1 className="text-2xl">{title}</h1>
          <Link href={"#"} className="col-span-6">
            <Image
              src={image}
              alt="Project Image"
              width={1600}
              height={900}
              className="aspect-video rounded-lg -z-10"
            />
          </Link>
          <p className=" bg-secondary xl:w-[110%] rounded-lg p-4 text-slate-400">
            {description}
          </p>
          <ul className="flex justify-center gap-2 text-gray-500">
            {tags.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
